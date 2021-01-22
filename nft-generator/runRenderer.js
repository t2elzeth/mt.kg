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


// If function was called with `data=null`, it fetches not rendered projects from API,
// and if finds any, runs main() recursively until projects are all rendered
const main = (data = null) => dataExists(data) ? startRender(data) : checkForNewProjects()

const dataExists = data => data !== null

const startRender = data => new Promise(resolve => render(data).then(resolve).catch(console.log))

const checkForNewProjects = () => axios.get(urls.all).then(manageWork)


const manageWork = ({data}) => newProjectsExist(data) ? startWorking(data[0]) : finishWorking()

const newProjectsExist = responseData => responseData.length > 0

function startWorking(data) {
  console.log("Started working with data: ", data)
  working = true;
  return main(data).then(main)
}

function finishWorking() {
  console.log("Before finishing", working)
  working = false;
  console.log("After finishing", working)
}


const render = data => new Promise(resolve => spawnChildProcess(data).then(updateProjectStatus).then(resolve))

function spawnChildProcess({id, imagename}) {
  return new Promise(resolve => {
    const childProcess = cp.fork("./app.js", ["-i", getImagePath(imagename)], {silent: true})
    childProcess.on("exit", code => resolve({id, code}))
  })
}

const updateProjectStatus = ({id, code}) => {
  return new Promise(resolve => axios.put(urls.update(id), {code}).then(() => resolve()).catch(console.log))
}

const getImagePath = imagename => path.join("./main_backend_images/", imagename)

module.exports.render = main
module.exports.getWorking = () => working;
module.exports.setWorking = (value) => working = value;