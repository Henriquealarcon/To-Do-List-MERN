const express = require('express');
const rescue = require('express-rescue');
const { isNameValid, isEmailValid, isPasswordValid, tokenGenerator } = require('../../validations/validations');
const {createUser} = require('./register');


const router = express.Router({mergeParams: true});

router.post('/', rescue(isNameValid), rescue(isEmailValid),rescue(isPasswordValid),rescue(tokenGenerator),rescue(createUser));

module.exports = router;