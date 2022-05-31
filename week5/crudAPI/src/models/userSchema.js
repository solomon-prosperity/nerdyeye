const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName:  {
    type: String, 
    required: true
    }, 
  email: {
    type: String, 
    required: true,
    trim: true
    }, 
  password:{
    type: String, 
    required: true,
    trim: true,
    //select: false
    },
  refreshToken: {
      type: String
    },
    
  avatar: {
      type: String
    },

},
    {timestamps: true}
);

const User = mongoose.model('User', userSchema)

module.exports = User