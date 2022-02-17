const express = require('express');
const rescue = require('express-rescue');
const { authorization } = require('../../middlewares/authorization');
const { taskNameValidation, taskContentValidation, taskCategoryValidation, taskPriorityValidation } = require('../../validations/validations');
const { getAllTasks } = require('./getTasks');
const { newTask } = require('./newTask');

const router = express.Router({mergeParams: true});

router.post('/',
 rescue(authorization),
 rescue(taskNameValidation),
 rescue(taskContentValidation),
 rescue(taskCategoryValidation),
 rescue(taskPriorityValidation),
 rescue(newTask));

 router.get('/', rescue(authorization), rescue(getAllTasks));

module.exports = router;