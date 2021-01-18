const path = require("path");
const cp = require("child_process");
const axios = require("axios");
const urljoin = require("url-join");

const apiServer = "http://127.0.0.1:8001"

const urls = {
  all: urljoin(apiServer, "api/v1/ar/not_rendered/all/"),
  update: (id) => urljoin(apiServer, "api/v1/ar/not_rendered/update/", String(id), "/")
}

let working = false;

function checkForNewProjects(data = null) {
  if (data === null) return null

  startRenderer(data["id"], data["imagename"])
  axios.get(urls.all)
       .then(res => res.data.length ? checkForNewProjects(data[0]) : working = false)
}

function startRenderer(id, imagename) {
  working = true;

  cp.fork("./app.js", ["-i", getImagePath(imagename)], {silent: true})
    .on("exit", code => updateProjectStatus(id, code))
}


function updateProjectStatus(id, code) {
  axios.put(urls.update(data["id"]), {code})
       .catch(err => console.log(err))
}

const getImagePath = (imagename) => path.join("./main_backend_images/", imagename)

module.exports = checkForNewProjects
