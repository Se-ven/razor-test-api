const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const razorBladesRouter = require('./routes/razor_blades');
const razorHandlesRouter = require('./routes/razor_handles');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/razor_blades', razorBladesRouter);
app.use('/razor_handles', razorHandlesRouter);

module.exports = app;
