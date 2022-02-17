const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require: true
    },
    taskContent: {
        type: String,
        require: true
    },
    taskCategory: {
        type: String,
        require: true
    },
    priority: {
        type: Boolean,
        require: false
    },
    userId: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {collection: 'tasks'});


const Task = mongoose.model('Tasks', TaskSchema);

module.exports = { Task }