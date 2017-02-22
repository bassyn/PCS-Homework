"use strict";
const fs = require('fs'),
      path = require('path');

fs.readdir(process.argv[2].toString(), (err, list) => {
    if (err) {
        console.error(err);
    } else {
        list.forEach ( (file) => {
            if(path.extname(file) == ('.' + process.argv[3])){
                console.log(file);
            }
        });
    }
});