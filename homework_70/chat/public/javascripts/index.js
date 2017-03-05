(function () {
    'use strict';

    const messagesDiv = $('#messages'),
        login = $('#login'),
        messageForm = $('#messageForm'),
        message = $('#message'),
        messageInput = $('#message'),
        name = $('#name'),
        socket = io(); // io.connect('localhost:80')

    socket.on('personJoined', name => {
        messagesDiv.append('<span>' + name + ' has joined the chat</span><br/>');
    });

    socket.on('message', msg => {
        console.log(msg);
        messagesDiv.append('<span>' + msg.name + msg.message + '</span><br/>');
    });

    socket.on('disconnect', () => {
        messagesDiv.append('<span>' + name.val() + ' has left the chat</span><br/>');
    });

    $(login).click(e => {
        socket.emit('personJoined', name.val());
        $('#loginDiv').css('display', 'none');
        $(messagesDiv).css( { 'height': '200px', 'border': '1px solid black', 
                             'margin-bottom': '6px', 'display' : 'block'});
        $(messageForm).css('display', 'block');
        $(message).css('width', '95%');
        $(login).val('');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', {
            name: name.val() + ': ',
            message: messageInput.val()  
        });
        messageInput.val('');
    });

}());