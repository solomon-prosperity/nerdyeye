const express = require('express')
const router = require('./expressRouter')


const app = express()

app.use(express.json())

app.use('/api', router)




app.listen(5000, ()=> {
    console.log(`server is listening on port 5000`)
})