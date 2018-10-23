const express = require('express');
const path = require('path');

const indexRouter = require('./routes');

const app = express();

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
	res.send("ERROR");
});

module.exports = app;
