'use strict';

const express = require('express'),
    app = express();

app.use(require('./fileServer'));

app.use('/', (req, res, next) => {
    res.send('Hello Express World!');
});

app.listen(80);