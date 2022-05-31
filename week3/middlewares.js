// req ==> Middleware ==> res
/*
Types of middlewares
1. Application level middlewares
2. Router Level middlewares
3. Embedded middlewares

*/

//  req => middleware => res




const express = require('express')
const app = express()

const logger = (req, res, next)=> {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/contact', (req, res) => {
    res.send('contact')
  })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
