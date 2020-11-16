var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var { connectToDb } = require('./db');
const db = require('./database/models');
const session = require('express-session');

var usersRouter = require('./routes/users');

//rutas creadas
let homeRouter = require('./routes/home');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let detalleUsuarioRouter = require('./routes/detalleUsuario');
let postsRouter = require('./routes/posts');
let buscadorRouter = require('./routes/buscador');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session (
  { secret: 'fakebook',
    resave: false,
    saveUninitialized: true }
));

//Info en todas las vistas
app.use(function(req, res, next){
  if(req.session.userLogueado != undefined) {
    //locals deja datos disponibles en todas las vistas
      res.locals.user = req.session.userLogueado
  }
  return next();
})

// cookies 
app.use(function(req, res, next){
  if (req.cookies.userLogged != undefined && req.session.user == undefined) {
    db.User.findByPk(req.cookies.userLogged)
      .then(function(user){
        req.session.user = user;
        return next();
      })
      .catch(e => console.log(e))
  }

  return next();
})

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/usuario', detalleUsuarioRouter);
app.use('/posts', postsRouter);
app.use('/register', registerRouter);
app.use('/buscador', buscadorRouter);

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

app.listen(3000, () => {
  console.log("Listening to port 3000...")
});

// connectToDb();

module.exports = app;
