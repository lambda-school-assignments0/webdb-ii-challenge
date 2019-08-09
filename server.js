const express = require("express");
const CarRouter = require("./cars/car-router");

const server = express();

server.use(express.json());
server.use("/api/cars", CarRouter);

server.get("/", (req, res) => {
    res.send("<h1>WebDB II Challenge</h1>");
});

module.exports = server;
