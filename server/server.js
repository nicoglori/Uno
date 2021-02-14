var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



io.on('connection', function (socket) {
  console.log('A user connected: ' + socket.id);


  socket.on('SendCard', function (piro) {
    console.log(piro);
    socket.broadcast.emit('SendCard', piro);
  });

  socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
  });

});



http.listen(3000, () => {
  console.log('listening on *:3000');
});
