const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        data = data.toString();
        var reversedText = '';
        for (var i = data.length - 1; i>=0; i--) {
            reversedText += data[i];
        }
        console.log(reversedText);
    }
});

console.log('Done');