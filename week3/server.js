const express = require('express')
const path = require('path')
const people = require('./data')
//console.log(people)

const app = express()



app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })

app.get('/data', (req, res)=> {
    res.send(people)
})

app.get('/about', (req, res)=> {
    res.status(200).send(`About Me`)
})

app.get('/contact', (req, res)=> {
    res.status(200).send(`Contact Me`)
})

app.get('/home', (req, res)=> {
    res.status(302).redirect('/')
})

app.get('*', (req, res)=> {
    res.status(404).send(`Page not found`)
})

app.listen(5000, ()=> {
    console.log(`server is listening on port 5000`)
})