var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var hbsHepler = require('./helpers/hbsHelpers');

var notesRouter = require('./routes/notes');
var myPageRouter = require('./routes/myPage');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.create({
  extname: '.hbs',
  defaultLayout: 'defaultLayout.hbs',
  layoutsDir: app.get('views') + '/layouts',
  partialsDir: [
    app.get('views') + '/partials',
    app.get('views') + '/partials/notes',
    app.get('views') + '/partials/articles',
    app.get('views') + '/partials/books',
    app.get('views') + '/partials/myInfo',
    app.get('views') + '/partials/myPage'
  ],
  helpers: hbsHepler
}).engine);
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /static
//app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', notesRouter);  //首页在notes中
app.use('/myPage', myPageRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('errors/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
