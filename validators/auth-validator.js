const { z } = require('zod')
const User = require('../models/User')

const signUpSchema = z.object({
    name: z.string({required_error: 'Name is required'})
    .min(3, {message: 'Name requires minimum 3 characters'})
    .max(30, {message: 'Name cannot exeed mote than 30 characters '})
    .regex(/^[A-Za-z\s]+$/, {message: 'Name should only contain letters and spaces'}),

    email: z.string({required_error: 'Email is required'}).email({message: 'Invalid email'})
    .refine(async (email)=>{
        let emailExist = await User.findOne({email})
        return !emailExist 
    }, 'Email already exist'),

    password: z.string({required_error: 'Password is required'})
    .min(8, {message: 'Password requires minimum 8 characters'})
})

const logInSchema = z.object({
    email: z.string({required_error: 'Email is required'})
    .email({message: 'Invalid email'}),
    
    password: z.string({required_error: 'Password is required'})
})

module.exports = { signUpSchema, logInSchema }