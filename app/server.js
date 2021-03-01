// http module to create the server object socket.io will make use of
const http = require("http");
// express.js for building the server
const express = require("express");
// socket.io for real time communication between server and client
const socketio = require("socket.io");
// connect to mongoose
const connectDB = require("./models/mongo.js")
connectDB()

const server = express();
const http_server = http.createServer(server)
const io = socketio(http_server);

// helping express work with json
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

http_server.listen(PORT);
