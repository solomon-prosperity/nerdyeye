const express = require('express')
const router = express.Router()
const {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}= require('../controller/productController')

const verifyUser = require('../middlewares/authorize')


router.post('/', createProduct)
router.get('/all', getAllProducts)
// router.get('/:id', getOneProduct)
// router.put('/:id', updateProduct)
// router.delete('/:id', deleteProduct)

router.route('/:id')
        .get(getOneProduct)
        .put(updateProduct)
        .delete(deleteProduct)


module.exports = router