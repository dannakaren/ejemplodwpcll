var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('ejemplodwpcll:server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Creando la instancia de express
var app = express();

// Configurando el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Se establecen los middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Crea un server de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Registro de Middlewares de aplicación
app.use('/', indexRouter);
// Activa "usersRourter" cuando se
// solicita "/users"
app.use('/users', usersRouter);
// app.use('/author', (req, res)=>{
//   res.json({mainDeveloper: "Danna Gutierrez"})
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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