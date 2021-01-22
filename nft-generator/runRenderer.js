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


const main = (data = null) => dataExists(data) ? startRender(data) : checkForNewProjects()

const dataExists = (data) => data !== null

function startRender(data) {
  console.log("Project found", data)
  return new Promise(resolve => render(data).then(resolve).catch(console.log))
}

function checkForNewProjects() {
  console.log("Fetching new projects", working)
  axios.get(urls.all).then(manageWork)
}


const manageWork = ({data}) => newProjectsExist(data) ? startWorking(data[0]) : finishWorking()

const newProjectsExist = responseData => responseData.length > 0

function startWorking(data) {
  working = true;
  return main(data).then(main)
}

function finishWorking() {
  console.log("Before finishing", working)
  working = false;
  console.log("After finishing", working)
}


function render(data) {
  return new Promise(resolve => spawnChildProcess(data).then(updateProjectStatus).then(resolve))
}

function spawnChildProcess({id, imagename}) {
  return new Promise(resolve => {
    const childProcess = cp.fork("./app.js", ["-i", getImagePath(imagename)], {silent: true})
    childProcess.on("exit", code => resolve({id, code}))
  })
}

const updateProjectStatus = ({id, code}) => {
  return new Promise(resolve => axios.put(urls.update(id), {code}).then(noArgsResolve(resolve)).catch(console.log))
}

const getImagePath = (imagename) => path.join("./main_backend_images/", imagename)

const noArgsResolve = (resolve) => () => resolve()

module.exports.render = main
module.exports.getWorking = () => working;
module.exports.setWorking = (value) => working = value;