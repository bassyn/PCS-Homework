'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
    } else { 
        var newLines = -1,
            newArray = data.toString().split('\n');
        console.log(newLines += newArray.length);
    }
});