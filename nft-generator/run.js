const path = require("path");
const cp = require("child_process");
const axios = require("axios");
const urljoin = require("url-join");

const apiServer = "http://127.0.0.1:8001"

const urls = {
  all: urljoin(apiServer, "api/v1/ar/not_rendered/all/"),
  update: (id) => urljoin(apiServer, "api/v1/ar/not_rendered/update/", String(id), "/")
}

let childProcess;

const runChecker = () => setInterval(checkNotRenderedProjects, 3000)

let interval = runChecker()


function checkNotRenderedProjects() {
  axios.get(urls.all).then(res => {
    const data = res.data;

    if (data.length) {
      const arProjectData = data[0]
      clearInterval(interval)

      const imagename = arProjectData["imagename"]
      const imagepath = path.join("./main_backend_images/", imagename)
      childProcess = cp.fork("./app.js", ["-i", imagepath], {silent: true});

      console.log("Child process started!", arProjectData)
      childProcess.on("exit", code => {
        console.log(arProjectData, "rendering has been finished. Exit code:", code)

        axios.put(urls.update(arProjectData["id"]), {code})
             .catch(err => console.log(err))
        interval = runChecker()
      })
    } else {
      console.log("NO DATA!")
    }
  }).catch(err => console.log(err))
}

