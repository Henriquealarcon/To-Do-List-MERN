
const {Task} = require('../../models/task.model')
const newTask = async (req, res, _next) => {
    const { taskName, taskContent, taskCategory, priority } = req.body;
    const userId = req.user.id;
    console.log(req.user)
    const newData = await Task
    .create({ taskName, taskContent, taskCategory, priority,userId });
    return res.status(201).json(newData);
};

module.exports = {
    newTask,
};