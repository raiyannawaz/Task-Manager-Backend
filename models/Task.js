const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['work', 'personal', 'others'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        required: true,
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
})

const Task = new model('task', TaskSchema)

module.exports = Task