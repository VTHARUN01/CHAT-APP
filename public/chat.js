var socket = io()
var messages = document.querySelector('ul');
var form = document.querySelector('form')
var input = document.querySelector('#input')
var input1 = document.querySelector('#name')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat', { user: input1.value, text: input.value });
        input.value = '';
    }
});
socket.on('chat', function (msg) {
    var item = document.createElement('li');
    item.innerHTML = `<span>${msg.user}:</span>${msg.text}`;
    messages.appendChild(item);
});
// console.log(https://f76f7d395489.ngrok.io/comments/enter ur name)