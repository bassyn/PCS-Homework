const url = require('url'),
      fs = require('fs'),
      path = require('path'),
      contentType = {
         '.html': 'text/html',
         '.css': 'text/css',
         '.js': 'application/javascript'
      };
module.exports = function (req, res, next) {

    console.log('serving', req.url);

    const ext = path.extname(req.url);
    if (ext && contentType[ext]) {
        res.setHeader('Content-type', contentType[ext]);
    }

    fs.readFile('content/' + req.url, 'utf-8', (err, data) => {
        if (err) {
            next();
        }

        res.end(data);
    });
    
}