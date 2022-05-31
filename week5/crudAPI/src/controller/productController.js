const Product = require('../models/productSchema')


const createProduct = async (req, res)=> {
    try {
        const {id} = req.user
        const {name,price,description} = req.body
        const newProduct = await Product.create({name,price,description,userId: id})
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
}

const getAllProducts = async(req, res) => {
    const products = await Product.find({}).populate({path: 'userId', select: ['fullName', 'email']})
    res.status(200).json({
        success: true,
        msg: "successfully retrieved data from the database",
        data: products
    })
}

const getOneProduct = async(req, res) => {
    const id = req.params.id
    const oneProduct = await Product.findOne({_id: id})
    res.status(200).json({
        success: true,
        msg: "successfully retrieved one data from the database",
        data: oneProduct
    })
}

const updateProduct = async(req, res) => {
    const id = req.params.id
    const payload = req.body
    const updateProduct = await Product.findOneAndUpdate({_id: id}, payload, {new: true})
    res.status(200).json({
        success: true,
        msg: "successfully updated a document in the database",
        data: updateProduct
    })
}


const deleteProduct = async(req, res) => {
    const id = req.params.id
    await Product.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        msg: "successfully deleted a record from the database",
    })
}


module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}