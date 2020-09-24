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

io.on('connection', function (socket){
    console.log("A New User just connected",);
    socket.emit('newMessage',{ from:'drake',
                text:'turn off light'})
    socket.on('OnOff', function(state){
        console.log("datasend",state);
        io.emit('broadcast',state);
    })
    socket.on('disconnect',function ()  {
        console.log('user has disconnected');
});
})

server.listen(port, function (){
    console.log("server is up on 3000");
})