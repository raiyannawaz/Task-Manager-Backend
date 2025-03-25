const { z } = require('zod')

const taskSchema1 = {
    title: z.string({required_error: 'Title is required'})
    .min(3, {message: 'Title requires minimum 3 characters'})
    .max(25, {message: 'Title cannot exeed more than 25 characters'}),

    description: z.string({required_error: 'Description is required'})
    .min(3, {message: 'Description requires minimum 3 characters'})
    .max(100, {message: 'Description cannot exeed more than 100 characters'}),

    category: z.enum(['work', 'personal', 'others'], {message: 'Invalid category'}),

    priority: z.enum(['high', 'medium', 'low'], {message: 'Invalid priority'})
}

const taskSchema2 = {
    status: z.enum(['pending', 'in-progress', 'completed'], {message: 'Invalid status'})
}

const taskAddSchema = z.object({
    ...taskSchema1
})

const taskUpdateSchema = z.object({
    ...taskSchema1, ...taskSchema2
})

module.exports = { taskAddSchema, taskUpdateSchema }