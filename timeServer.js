'use strict';

var net = require('net');

var server = net.createServer(function listener(socket){
    var date = new Date(),
        year = date.getFullYear(),
        month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth()),
        day = ((date.getDate() + 1) < 10) ? '0' + (date.getDate() + 1) : (date.getDate()),
        hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
        minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
        data = (year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
    //socket.write(data.toString());
    socket.end(data);
});
server.listen(process.argv[2]);

