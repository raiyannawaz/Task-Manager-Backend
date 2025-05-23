const User = require('../models/User')

const signUp = async (req, res) =>{
    try{
        let { name, email, password } = req.body;

        let newUser = { name, email, password }
        
        let response = await User.create(newUser)

        let token = await response.generateToken()

        res.status(200).json({message: 'Sign up successfull', token})
    }
    catch(err){
        res.status(404).json({message: err.message || 'Uncaught error'})
    }
}

const signIn = async (req, res) =>{
    try{
        let {email, password} = req.body;

        let response = await User.findOne({email})

        if(!response){
            return res.status(400).json({message: 'User not exist'})
        }

        let comPass = await response.comparePassword(password)

        if(!comPass){
            return res.status(400).json({message: 'Wrong password'})
        }

        let token = await response.generateToken()

        res.status(200).json({message: 'Sign in successfull', token})

    }
    catch(err){
        res.status(404).json({message: err.message || 'Uncaught error'})
    }
}

const signOut = async (req, res) =>{
    try{
        let user = await User.findById(req._id)
        user.tokens = user.tokens.filter(({token})=>
            token !== req.token
        );

        await user.save()
        res.status(200).json({message: 'Sign out successfull'})
    }
    catch(err){
        res.status(404).json({message: err.message || 'Uncaught error'})
    }
}

module.exports = { signUp, signIn, signOut }