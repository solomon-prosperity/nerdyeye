const express = require('express')
const app = express()
const connectDB = require('./config/config')
const router = require('./src/router/productRouter')
const userRouter = require('./src/router/userRouter')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

connectDB() // connect to database

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Welcome to our CRUD API`
    })
})
//localhost:5000/api/
app.use('/api', router) // product router
app.use('/api/user', userRouter) // user router




app.listen(PORT, ()=> {
    console.log(`server is listening on port ${PORT}`)
})