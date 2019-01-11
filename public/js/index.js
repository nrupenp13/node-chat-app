var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');



  socket.emit('createMessage', {
    from:'jen@example.com',
    text:'Hi Boss'
  })

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});


socket.on('newMessageEvent', function(message){
  console.log('Got New message', message);
});
