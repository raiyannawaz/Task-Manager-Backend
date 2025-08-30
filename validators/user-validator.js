const { z } = require('zod')

const updateUserSchema = z.object({
     name: z.string({required_error: 'Name is required'})
    .min(3, {message: 'Name requires minimum 3 characters'})
    .max(30, {message: 'Name cannot exeed mote than 30 characters '})
    .regex(/^[A-Za-z\s]+$/, {message: 'Name should only contain letters and spaces'}),

    email: z.string({required_error: 'Email is required'}).email({message: 'Invalid email'})
})

module.exports = updateUserSchema