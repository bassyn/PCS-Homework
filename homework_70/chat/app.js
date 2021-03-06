var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = http.createServer(app);
server.listen(80);

const socket_io = require('socket.io');
const io = socket_io.listen(server);

// Wait for connection
io.on('connection', socket => {
  console.log('Got a connection');
  socket.emit('connect', 'Thanks for connecting!');

  // wait for 'message' events on this connection
  socket.on('message', data => {
    io.sockets.emit('message', data);
  });

  socket.on('personJoined', data => {
    io.sockets.emit('personJoined', data);
  });

  socket.on('connect', data => {
    io.sockets.emit('connect', data);
  });

  socket.on('disconnect', data => {
    io.sockets.emit('disconnect', data);
  });

});
