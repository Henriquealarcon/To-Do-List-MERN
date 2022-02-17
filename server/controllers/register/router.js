const express = require('express');
const rescue = require('express-rescue');
const {createUser} = require('./register');

const router = express.Router({mergeParams: true});

router.post('/ebytr', rescue(createUser));

module.exports = router;