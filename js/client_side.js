const socket = io.connect('http://localhost:3000');

// Handle incoming messages
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});

// Handle form submission
document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});
