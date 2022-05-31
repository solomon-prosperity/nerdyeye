const express = require('express')
const router = express.Router()
const {
    signUp,
    signIn,
    updateRecord,
    uploadAvatar,
    generateRefreshToken
} = require('../controller/userController')
const verifyUser = require('../middlewares/authorize')
const upload = require('../utils/upload')


router.post('/', signUp)
router.post('/login', signIn)
router.get('/refresh', generateRefreshToken)
router.put('/edit', verifyUser, updateRecord)

router.post('/upload', verifyUser,upload.single('avatar'), uploadAvatar)

router.get('/protected', verifyUser, (req, res)=> {
    const {name} = req.user
    res.status(200).json({success: true,
        msg: 'This is a protected resource for only signedIn Users',
        greeting: `Hello ${name}`

    })
    //console.log(req.user)
})


module.exports = router