'use strict';
var getList = require('./makeItModular');

getList(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
        console.error(err);
    }
    else {
        list.forEach(function(file){
            console.log(file);
        });
    }
}) ;