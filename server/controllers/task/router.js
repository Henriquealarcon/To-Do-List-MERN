const express = require('express');
const rescue = require('express-rescue');
const { authorization } = require('../../middlewares/authorization');
const { taskNameValidation, taskContentValidation, taskCategoryValidation, taskPriorityValidation } = require('../../validations/validations');
const { newTask } = require('./newTask');

const router = express.Router({mergeParams: true});

router.post('/',
 rescue(authorization),
 rescue(taskNameValidation),
 rescue(taskContentValidation),
 rescue(taskCategoryValidation),
 rescue(taskPriorityValidation),
 rescue(newTask));

module.exports = router;