const User = require('../models/User')
const { updMailContent } = require('../utils/mailcontent')
const sendMail = require('../utils/sendmail')
const { uploadImage } = require('../utils/upload')

const getUser = async (req, res) => {
    try {
        let user = await User.findById(req._id).select('-password -confirmPassword -createdAt -updatedAt -__v -tokens -access -_id')

        if (!user) {
            return res.status(400).json({ message: 'User not exist' })
        }

        res.status(200).json(user)
    }
    catch (err) {
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

const updateUser = async (req, res) => {
    try {
        let { name, email } = req.body;

        let userUpdate = { name, email }

        let emailExist = await User.findOne({ email })

        if (emailExist && emailExist._id.toString() !== req._id) {
            return res.status(400).json({ message: 'Email already exist' })
        }

        let sameEmail = emailExist?.email === email

        if (req.file) {
            // With Saving 
            // const uploadImage = await cloudinary.uploader.upload(req.file.path, {
            //     folder: 'user_profiles', use_filename: true,
            //     unique_filename: false, overwrite: true
            // })
            // userUpdate.imageUrl = uploadImage.secure_url
            // userUpdate.updatedAt = Date.now()

            // await User.findByIdAndUpdate(req._id, userUpdate)
            // res.status(200).json({ message: 'User updated' })
            // With Saving 

            // Without Saving 
            const result = await uploadImage(req.file.buffer, 'Task_Manager/user_profiles')
            userUpdate.imageUrl = result.secure_url;
            // Without Saving 
        }
        
        userUpdate.updatedAt = Date.now()
        
        if(!sameEmail){
            let info = {
                sendTo: email, subject: "Task Manager: Email update confirmation",
                content: updMailContent.replace('{$name$}', name.split(' ')[0])
            }
            await sendMail(info)
        }

        await User.findByIdAndUpdate(req._id, userUpdate)

        res.status(200).json({ message: 'User updated' })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

module.exports = { getUser, updateUser }