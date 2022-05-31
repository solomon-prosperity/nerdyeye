const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  {
    type: String, 
    required: true,
    trim: true
    }, 
  price: {
    type: Number, 
    required: true,
    trim: true
    }, 
  description: {
    type: String, 
    required: true,
    trim: true
    },
  userId:  {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
      },

},
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema)

module.exports = Product