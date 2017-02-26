'use strict';

var http = require('http'),
    fs = require('fs');

http.createServer(function (request, response) {
    var rs = fs.createReadStream(process.argv[3], 'utf8');
    rs.pipe(response);
}).listen(process.argv[2]);