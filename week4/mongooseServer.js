const express = require('express')
const app = express()
//const router = require('./expressRouter')
const mongoose = require('mongoose')
const Product = require('./productsSchema')

const connectDB = ()=> {
    mongoose.connect(`mongodb+srv://BrynoKings:Brynokings7878998$@cluster0.zudvo.mongodb.net/NerdyeyeDatabase?retryWrites=true&w=majority`);
    console.log(`connected to mongodb database`)
}

connectDB()

app.use(express.json())

//CRUD

//Create a Record

app.post('/add', async (req, res)=> {
    try {
    const {name,price,description} = req.body
    const newProduct = await Product.create({name,price,description})
    const saveProduct = await newProduct.save()

    res.status(201).json({
        success: true,
        msg: "successfully added a record to the database",
        data: saveProduct
    })
    } catch(error) {
        res.status(500).json({
            success: false,
            data: error
        })
    }
    
})

// Read from the database
app.get('/all', async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({
        success: true,
        msg: "successfully retrieved data from the database",
        data: products
    })
})

//Read One Record from  the database
app.get('/one/:id', async (req, res) => {
    const id = req.params.id
    const oneProduct = await Product.findOne({_id: id})
    res.status(200).json({
        success: true,
        msg: "successfully retrieved one data from the database",
        data: oneProduct
    })
})

//Update One Record in the database
app.put('/edit/:id', async (req, res) => {
    const id = req.params.id
    const payload = req.body
    const updateProduct = await Product.findOneAndUpdate({_id: id}, payload, {new: true})
    res.status(200).json({
        success: true,
        msg: "successfully updated a document in the database",
        data: updateProduct
    })
})


//Remove a record from the database
app.delete('/remove/:id', async  (req, res)=> {
    const id = req.params.id
    await Product.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        msg: "successfully deleted a record from the database",
    })

})




app.listen(5000, ()=> {
    console.log(`server is listening on port 5000`)
})