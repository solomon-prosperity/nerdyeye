const express = require('express')
const people = require('../week3/data')
const router = express.Router()

router.get('/router', (req, res)=> {
    res.send(`Hello from Express Router`)
})

router.get('/', (req, res) => {
    res.send(`Welcome to our CRUD API`)
})

//GET ALL (READ)

router.get('/all', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "successfully retrieved data from the database",
        data: people
    })
})

//GET A SINGLE RECORD (READ)
router.get('/one/:id', (req, res) => {
    const id = req.params.id
    const onePerson = people.find((person)=> person.id == id)
    res.status(200).json({
        success: true,
        msg: "successfully retrieved one data from the database",
        data: onePerson
    })
})

//CREATE A RECORD (CREATE)
router.post('/add', (req, res)=> {
    const {id, name} = req.body
    people.push({id,name})
    res.status(201).json({
        success: true,
        msg: "successfully added a record to the database",
        data: people
    })
})

//UPDATE AN EXISTING RECORD (UPDATE)
router.put('/edit/:id', (req, res)=> {
    const id = req.params.id
    const {name} = req.body
    let onePerson = people.find((person)=> person.id == id)
    const updatedPerson = onePerson.name = name
    
    res.status(200).json({
        success: true,
        msg: "successfully updated a record in the database",
        data: updatedPerson
    })
})

//REMOVE AN EXISTING RECORD (DELETE)
router.delete('/remove/:id', (req, res)=> {
    const id = req.params.id
    const newPeople = people.filter((person)=> person.id !== Number(id))

    res.status(200).json({
        success: true,
        msg: "successfully deleted a record from the database",
        data: newPeople
    })

})



module.exports = router