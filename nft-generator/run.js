// const cp = require("child_process");
//
//
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

function consoleLog() {
  console.log("3 sec passed")
}

setInterval(consoleLog, 3000)