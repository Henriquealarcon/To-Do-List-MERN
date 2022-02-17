const express = require('express');

const root = express.Router({mergeParams: true});

const userRouter = require('./register/router');
const loginRouter = require('./login/router');
const taskRouter = require('./task/router');

root.use('/register', userRouter);
root.use('/login', loginRouter);
root.use('/task', taskRouter);

module.exports = {root};