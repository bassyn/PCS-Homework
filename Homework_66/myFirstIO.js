"use strict"
const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2]);
var newLines = -1,
    newArray = fileContents.toString().split('\n');
console.log(newLines += newArray.length);