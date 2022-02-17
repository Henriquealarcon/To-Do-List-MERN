const express = require('express');
const rescue = require('express-rescue');
const { emailLoginValidation,
        passwordLoginValidation, 
        loginValidation,
        tokenGenerator } = require('../../validations/validations');
const { newLogin } = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/',
  rescue(emailLoginValidation),
  rescue(passwordLoginValidation),
  rescue(loginValidation),
  rescue(tokenGenerator),
  rescue(newLogin));

module.exports = router;