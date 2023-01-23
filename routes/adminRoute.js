const express = require('express')
const router = express.Router()
const {registerAdmin, 
    loginAdmin,
    getMe}= require('../controllers/adminController')


router.post('/', registerAdmin)
router.post('/login',loginAdmin)
router.get('/me',getMe)


module.exports=router