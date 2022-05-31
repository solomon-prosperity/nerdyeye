const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const connectDB = ()=> {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongodb database`)
}


module.exports = connectDB