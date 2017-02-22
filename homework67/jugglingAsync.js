'use strict';

let http = require ('http'),
    bl = require('bl'),
    result = [],
    responseReceived = 0;

function printOutResults() {
    for(var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}

function getHttp(i) {
    http.get(process.argv[2 + i], (response) => {
            response.pipe(bl((err, data) => { 
                if(err){
                    console.error(err);
                } else {
                    result[i] = data.toString();
                    responseReceived++;
                }
            if(responseReceived == 3) {
                printOutResults();
            }
        }));
    });
    
}

for(var i = 0; i<3; i++) {
    getHttp(i);
}

