// const express = require("express");
// const app = express();
// const port = 4000;
// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer);

// var app = require( 'express' )();
// var http = require( 'http' ).createServer( app );
// var io = require( 'socket.io' )( http );

// const PORT = 4000;

// http.listen( PORT, function() {
//    console.log( 'listening on *:' + PORT );
// });

// io.on( 'connection', function( socket ) {
//    console.log( 'a user has connected!' );
//    });
    
// function getRandomValue(){
//     console.log('test');
//     return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
// }
// io.on("connection", socket => {
//    console.log('new user');
//     setInterval(() => {        
//         socket.broadcast.emit("newdata", getRandomValue())
//     }, 10)
// });

// httpServer.listen(`${port}`, function() {
//     getRandomValue();
//     console.log(`Server started on port ${port}`);
//   });

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){ res.sendFile('E:/test/index.html');
// });

// //Whenever someone connects this gets executed
// io.on('connection', function(socket){
//    console.log('A user connected');
   
//    //Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       console.log('A user disconnected');
//    });
// });
// http.listen(3000, function(){
//    console.log('listening on *:3000');
// });


const express = require("express");
const app = express();
const port = 4000;
    
const server = app.listen(`${port}`, function() {
  console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server);
    
function getRandomValue(){
   console.log('Test');
   return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
io.on("connection", socket => {
    setInterval(() => {
        socket.broadcast.emit("newdata", getRandomValue())
    }, 5000)
});



