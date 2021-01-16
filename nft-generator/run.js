const cp = require("child_process");
const axios = require("axios");
const urljoin = require("url-join");

const apiServer = "http://127.0.0.1:8001"

const urls = {
  all: urljoin(apiServer, "api/v1/ar/not_rendered/all/"),
  update: urljoin(apiServer, "api/v1/ar/not_rendered/update/")
}

let working = false
const interval = setInterval(checkNotRenderedProjects, 3000)


function checkNotRenderedProjects() {
  if (working) {
    console.log("ITS WORKING ALREADY DAMN IT")
  } else {
    axios.get(urls.all).then(res => {
      // working = true;
      const data = res.data;

      if (data.length) {
        console.log(data)
      } else {
        console.log("NO DATA!")
      }
    }).catch(err => console.log(err))
  }
}



// function spawnChildProcess(imagepath) {
//   let childProcess;
//   childProcess = cp.fork("./app.js", ["-i", imagepath], {detached: true, silent: true});
//
//   childProcess.on("exit", code => {
//     console.log(imagepath, "rendering has been finished. Exit code:", code)
//   })
//   return childProcess
// }

//
// spawnChildProcess("img/3r.jpg")
// spawnChildProcess("img/10mb.jpeg")
// spawnChildProcess("img/koff.jpg")
// spawnChildProcess("img/me.jpg")
// spawnChildProcess("img/mt.jpg")
// spawnChildProcess("img/path.jpg")
// spawnChildProcess("img/scr.png")
// spawnChildProcess("img/som200.jpg")
