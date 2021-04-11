// http module to create the server object socket.io will make use of
const http = require("http");
// express.js for building the server
const express = require("express");
// socket.io for real time communication between server and client
const socketio = require("socket.io");
// path module
const path = require("path");
// cookie parser
const cookieParser = require("cookie-parser")
// connect to mongoose
const connectDB = require("./models/mongo.js");
connectDB();

const server = express();
const http_server = http.createServer(server);
const io = socketio(http_server);

// location to the views folder
const viewsLocation = path.join(__dirname, "./views/views");
// location to the statics folder
const staticFilesLocation = path.join(__dirname, "./views/static");

// helping express work with json and cookies
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// set up ejs as the view engine
server.set("view engine", "ejs");
server.set("views", viewsLocation);

// inform express about the location of static files
server.use(express.static(staticFilesLocation));

// home route for serving web pages
server.use("/", require("./routes/homeRoute.js"));
// end point for interacting with the user model
server.use("/user", require("./routes/userRoute.js"));
// end point for interacting with the property model
server.use("/property", require("./routes/propertyRoute.js"));
// end point for interacting with the item model
server.use("/item", require("./routes/itemRoute.js"));

server.use((req, res) => {
  res.status(404).send({ error: "This http endpoint does not exist" });
});

const PORT = process.env.PORT || 3000;

http_server.listen(PORT);
