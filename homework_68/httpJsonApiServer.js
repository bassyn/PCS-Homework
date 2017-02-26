'use strict';

const http = require('http'),
      url = require('url');

http.createServer((request, response) => { 
    if(request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var  newUrl = url.parse(request.url, true),
            date = new Date(newUrl.query.iso);
       if (newUrl.pathname === '/api/parsetime') {
            var hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds();
            date = JSON.stringify(
                {
                    "hour" : hour, 
                    "minute" : minute, 
                    "second" : second}
                );
       }
     
        if (newUrl.pathname === '/api/unixtime') {
            date = JSON.stringify({"unixtime" : date.getTime()});
        }
         response.end(date);
    }
}).listen(process.argv[2]);