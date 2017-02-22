const events = require('events'),
      eventEmitter = new events.EventEmitter();

eventEmitter.on('secondEvent', () => {
    var currentTime = new Date();
    console.log(currentTime.toString());
});

setInterval (() => {
    eventEmitter.emit('secondEvent');
}, 1000);