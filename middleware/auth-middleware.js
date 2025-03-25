const { verify } = require('jsonwebtoken')

const authMiddleware = async (req, res, next) =>{
    try{
        let token = await req.header('Authorization')

        if(!token){
            return res.status(401).json({message: 'Sign Up / Log In required'})
        }

        let verifyToken = await verify(token, process.env.SECRET_KEY)

        if(!verifyToken){
            return res.status(401).json({message: 'Sign Up / Log In required'})
        }

        let { _id } = await verifyToken

        req._id = _id

        next()
    }
    catch(err){
        res.status(404).json({message: err.message || 'Uncaught error'})
    }
}

module.exports = authMiddleware