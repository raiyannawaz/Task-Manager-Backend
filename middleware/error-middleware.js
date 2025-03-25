const errorMiddleware = (err, req, res, next) =>{
    let message = err.message || 'Uncaught error'
    let status = err.status || 500

    return res.status(status).json({message})
}

module.exports = errorMiddleware