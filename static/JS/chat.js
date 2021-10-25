const socket = io();
const messageList = document.querySelector('#msg-container>ul');

function sendMessage() {
  socket.emit('msgToServer', document.querySelector('#input-msg').value);
  document.querySelector('#input-msg').value = '';
}

// Would rendering a svelte component be better?
socket.on('msgFromServer', (...args) => {
  console.log(args);
  const msg = args[0];
  if (msg) {
    messageList.innerHTML += msg;
  }
});

window.onload = () => {
  document.querySelector('#input-btn').onclick = sendMessage;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  document.querySelector('a[href="/chat"]').remove();
};
