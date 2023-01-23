const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')


const protect = asyncHandler(async (req, res, next) => {

    let token


    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get admin from token 
            req.admin= await Admin.findById(decoded.admin).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.send({status:401,message:'Not authorized, no token'})

        }
    }

    if(!token){
        res.send({status:401,message:'Not authorized, no token'})
    }

})


module.exports = {protect}
//Bearer ndjcd