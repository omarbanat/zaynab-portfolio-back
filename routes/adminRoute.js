const express = require('express')
const router = express.Router()
const {
    loginAdmin,
    getMe}= require('../controllers/adminController')
const {protect}=require('../middleware/authMiddleware')

// router.post('/', registerAdmin)
router.post('/login',loginAdmin)
router.get('/me', protect , getMe)


module.exports=router