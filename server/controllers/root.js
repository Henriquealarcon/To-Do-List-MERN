const express = require('express');

const root = express.Router({mergeParams: true});

const userRouter = require('./register/router');

root.use('/register', userRouter);

module.exports = {root};