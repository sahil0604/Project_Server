 $(document).ready(function(){
 let socket = io();
   socket.on('connect',function () {
            console.log('Connected to server');
            
    $("button").click(function(){
        let message=$("#usr").val();
        socket.emit('OnOff', message);
    })
        
        });
            
        socket.on('disconnect',function () {
            console.log("Disconnected from the server")
        })
           socket.on('broadcast',function(message) {
            message = '<li>' + message + '</li>'
             $('ul').append(message);
            console.log('newMessage',message);
        })
 });