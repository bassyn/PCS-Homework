'use Strict';
const fs = require('fs'),
      path = require('path');


module.exports =  function (directory, fileExtension, callback) {
        fs.readdir(directory, (err, list) => {
            if (err) {
                return callback(err);
            } else {
                list = list.filter ( (file) => {
                    if(path.extname(file) == ('.' + fileExtension)){
                        //console.log(file);
                        return true;
                    }
                });
                    return callback(null, list);
            }
        });
    };