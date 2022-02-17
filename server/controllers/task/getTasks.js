const {Task} = require('../../models/task.model');

const getAllTasks = async (_req, res, _next) => {
    const newData = await Task.find();

    return res.status(200).json(newData);
};

module.exports = {
    getAllTasks,
};