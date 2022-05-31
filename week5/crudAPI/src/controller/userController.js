const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const createUserValidation = require('../validations/userValidation')

//No two users should have the same email
//passwords should be hashed
//Handle validations 
const signUp = async (req, res) => {
 let {fullName, email, password} = req.body

 try {

 const {error} = createUserValidation(req.body)
 if (error) return res.status(400).json({sucess: false, msg: error.details[0].message})

 const user = await User.findOne({email: email})
 if (user) return res.status(400).json({sucess: false, msg: "Email already exist"})

  let hashedPassword = await bcrypt.hash(password, 12)
  password = hashedPassword

 const saveUser = await User.create({fullName, email, password})
 await saveUser.save()

 const response = {
     fullName : saveUser.fullName,
     email: saveUser.email
 }

 res.status(201).json({
    success: true,
    msg: "successfully added a record to the database",
    data: saveUser
})
} catch(error) {
    res.status(500).json({
        success: false,
        data: error
    })
}

}


//email exist
//pasword match
//generate token
const signIn = async (req, res) => {
    const { email, password} = req.body
    let user = await User.findOne({email: email})
    if (!user) return res.status(404).json({sucess: false, msg: "No User with this email"})

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) return res.status(400).json({sucess: false, msg: "your email or password is incorrect"})

    const accessToken = jwt.sign({id: user._id, name: user.fullName}, process.env.JWT_SECRET, {expiresIn: '40d'})
    const refreshToken = jwt.sign({id: user._id, name: user.fullName}, process.env.REFRESH_SECRET, {expiresIn: '1d'})


    user.refreshToken = refreshToken

    await user.save()

    res.status(200).json({
        success: true,
        msg: "successfully loggedIn",
        data: user,
        accessToken: accessToken,
        refreshToken: refreshToken
    })



}

const updateRecord = async (req, res)=> {
    const {id} = req.user
    const {fullName}= req.body

    const user = await User.findOneAndUpdate({_id: id}, {fullName}, {new: true})
    if (!user) return res.status(404).json({sucess: false, msg: "User not found"})

    res.status(200).json({
        success: true,
        msg: "successfully updated a document in the database",
        data: user
    })

}

const generateRefreshToken = async(req, res)=> {
    const token = req.headers.refresh_token
    let user = await User.findOne({refreshToken: token})
    if (!user) return res.status(404).json({sucess: false, msg: "user not logged in"})

    const accessToken = jwt.sign({id: user._id, name: user.fullName}, process.env.JWT_SECRET, {expiresIn: '40s'})
    
    res.status(200).json({
        success: true,
        msg: "Access Token generated",
        data: user,
        accessToken: accessToken
    })
}

const uploadAvatar = async (req, res) => {

   const {id} = req.user
   console.log(req.file)

   let user = await User.findOne({_id: id})

   user.avatar = `localhost:4000/${req.file.path}`

   await user.save()

   res.status(200).json({
    success: true,
    msg: "successfully uploaded an image for the user",
    data: user
})

}


module.exports = {
    signUp,
    signIn,
    updateRecord,
    uploadAvatar,
    generateRefreshToken
}