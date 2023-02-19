const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Handle incoming connections
io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle incoming messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    // Send the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
http.listen(3000, () => {
  console.log('listening on *:3000');
});
