const parseSchema = (schema) => async (req, res, next) =>{
    try{
        let parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    }
    catch(err){ 
        res.status(422).json({message: err.issues[0].message ||'Uncaught error' })
    }
}

module.exports = parseSchema