require('dotenv').config()
require('./utils/cloudinary')
require('./db/conn').connectToDb()

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
// app.use(express.urlencoded())
app.use(cors(process.env.ALLOWED_CORS))
// app.use('/uploads', express.static(`${__dirname}/uploads`))

const authRouter = require('./routes/auth-router')
const taskRouter = require('./routes/task-router')
const userRouter = require('./routes/user-router')
const errorMiddleware = require('./middleware/error-middleware')

app.use('/api/auth', authRouter)
app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)
app.use(errorMiddleware)

app.listen(port, ()=>{
    console.log('Listening...')
})
