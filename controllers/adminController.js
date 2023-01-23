const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
//@desc Register new admin
//@route Post/admin/
//@access Public

const registerAdmin = asyncHandler(async (req, res) => {

    const { fullName, email, password, DOB } = req.body

    if (!fullName || !email || !password || !DOB) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const adminExists = await Admin.findOne({ email })

    if (adminExists) {
        res.status(400)
        throw new Error('Admin already exist')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create admin
    const admin = await Admin.create({
        fullName,
        email,
        passsword: hashedPassword,
        DOB
    })
    if (admin) {
        res.status(201).json({
            _id: admin.id,
            fullName: admin.fullName,
            email: admin.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid admin data')
    }
    res.json({ message: 'Register Admin' })
});

//@desc Login admin
//@route Post/admin/login
//@access Public

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })

    if (user && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            fullName: admin.fullName,
            email: admin.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    res.json({ message: 'LoginAdmin' })
})


//@desc Get admin data
//@route Get/admin/me
//@access Public

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'Admin data display' })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = { registerAdmin, loginAdmin, getMe }