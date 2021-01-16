const http = require("http");
const express = require("express");
const socketio = require("socket.io")

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
  })

  socket.on("disconnect", () => {
    console.log("Client has been disconnected!")
  })
})

server.listen(PORT, () => {
  console.log("Server is listening...");
})