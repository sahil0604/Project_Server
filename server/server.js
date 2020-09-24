const path = require("path");
const express = require("express");
const socketIO = require('socket.io');
const http = require('http');

const publicpath = path.join(__dirname,"/../public");
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection', (socket) => {
    console.log("A New User just connected")
    socket.on('disconnect',() => {
        console.log('user has disconnected');
});
})

server.listen(port, ()=>{
    console.log("server is up on 3000");
})