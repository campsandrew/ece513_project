const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const path = require('path');

const indexRouter = require('./routes/');
const loginRouter = require('./routes/login');
const createRouter = require('./routes/create');

const app = express();

/* Sets the view engine for dynamic pages */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/* This is to enable cross-origin access */
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	
	next();
});

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('dev'));

/* All top level routes */
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/create-account', createRouter);

/* Catch 404 error and send error page */
app.use(function(req, res, next) {
	res.locals.title = "UVFit | Error";
	res.locals.error = createError(404);
	
	res.status(404).render('error');
});

module.exports = app;
