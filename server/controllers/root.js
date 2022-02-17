const express = require('express');

const root = express.Router({mergeParams: true});

const userRouter = require('./register/router');
const loginRouter = require('./login/router');

root.use('/register', userRouter);
root.use('/login', loginRouter);

module.exports = {root};