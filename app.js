const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const mongoose = require("mongoose");
const logger = require('morgan');
const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');


const app = express();
const hbs = require("hbs");
mongoose.connect('mongodb://localhost:27017/newApp', { useNewUrlParser: true }).then(
    dat => { console.log("connected to mongodb !!!"); },
    err => { console.log(err); }
);
mongoose.Promise = global.Promise;
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.disable("x-powered-by");
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message,
        status: err.status
    });
});

module.exports = app;