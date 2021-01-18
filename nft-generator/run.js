const path = require("path");
const cp = require("child_process");
const axios = require("axios");
const urljoin = require("url-join");

const apiServer = "http://127.0.0.1:8001"

const urls = {
  all: urljoin(apiServer, "api/v1/ar/not_rendered/all/"),
  update: (id) => urljoin(apiServer, "api/v1/ar/not_rendered/update/", String(id), "/")
}

const runChecker = () => setInterval(checkNotRenderedProjects, 3000)
let interval = runChecker()


function checkNotRenderedProjects() {
  axios.get(urls.all)
       .then(res => res.data.length ? startRenderer(data[0]["id"], data[0]["imagename"]) : console.log("No data!"))
}

function startRenderer(id, imagename) {
  clearInterval(interval)

  cp.fork("./app.js", ["-i", getImagePath(imagename)], {silent: true})
    .on("exit", code => updateProjectStatus(id, code))
}


function updateProjectStatus(id, code) {
  interval = runChecker()

  axios.put(urls.update(data["id"]), {code})
       .catch(err => console.log(err))
}

const getImagePath = (imagename) => path.join("./main_backend_images/", imagename)
