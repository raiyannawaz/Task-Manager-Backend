const { config } = require('dotenv')
const { connectToDb } = require('./db/conn')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

config()
connectToDb()

app.use(express.json())
app.use(cors(process.env.ALLOWED_CORS))

const authRouter = require('./routes/auth-router')
const taskRouter = require('./routes/task-router')
const errorMiddleware = require('./middleware/error-middleware')

app.use('/api/auth', authRouter)
app.use('/api/task', taskRouter)
app.use(errorMiddleware)

app.listen(port, ()=>{
    console.log('Listening...')
})