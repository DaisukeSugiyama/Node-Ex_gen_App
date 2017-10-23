var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/*セッション利用*/
var session = require('express-session');
/*jquery*/
//var jquery = require('express-jquery');

var index = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');
var news = require('./routes/news');
var ajax = require('./routes/ajax');
var sqlitedb = require('./routes/sqlitedb');
var crud = require('./routes/crud');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//session セッション
var session_opt = {
    secret: 'keybord cat',
    resave: false,
    saveUninitialized: false,
    cokkie: { maxAge: 60 * 60 * 1000 }
};
app.use(session(session_opt));

/*jquery*/
//app.use(jquery('/jquery'));

app.use('/', index);
app.use('/users', users);
app.use('/hello', hello);
app.use('/news', news);
app.use('/ajax', ajax);
app.use('/sqlitedb', sqlitedb);
app.use('/crud', crud);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




module.exports = app;