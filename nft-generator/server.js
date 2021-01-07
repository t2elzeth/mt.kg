const http = require("http");
const express = require("express");
const socketio = require("socket.io")

const {render} = require("./render")

const app = express();
const server = http.createServer(app)
const io = socketio(server);
const PORT = 8920

io.on("connection", socket => {
  console.log("New WS connection");

  socket.emit("welcome", "Welcome to the server!");

  socket.on("welcome-back", message => {
    console.log(message);
  })

  socket.on("render", imagepath => {
    console.log("Received an image to render: ", imagepath)

    const res = render(imagepath);
    res
        .then(() => {
          socket.emit("success", `Imagepath ${imagepath} has been successfully rendered!`)
          console.log("SUCCESS!!!!!!!!!!!!")
        })
        .catch(() => {
          socket.emit("error", `There was an error while rendering ${imagepath}`)
          console.log("ERRROR!!!!!!!!!!!!!")
        })
        .finally(() => {
          socket.emit("finished", `Rendering the image ${imagepath} has been finished!`)
          console.log("FINALLLLY!!!!!!!!!!!!")
        })
  })

  socket.on("disconnect", () => {
    console.log("Client has been disconnected!")
  })
})

server.listen(PORT, () => {
  console.log("Server is listening...");
})