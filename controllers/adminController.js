const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');

//@route Post/admin/

// const registerAdmin = asyncHandler(async (req, res) => {

//     const { fullName, email, password, DOB } = req.body

//     if (!fullName || !email || !password || !DOB) {
//         res.status(400)
//         throw new Error('Please add all fields')
//     }

//     const adminExists = await Admin.findOne({ email })

//     if (adminExists) {
//         res.status(400)
//         throw new Error('Admin already exist')
//     }

//     //hash password
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     //Create admin
//     const admin = await Admin.create({
//         fullName,
//         email,
//         passsword: hashedPassword,
//         DOB
//     })
//     if (admin) {
//         res.status(201).json({
//             _id: admin.id,
//             fullName: admin.fullName,
//             email: admin.email
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid admin data')
//     }
//     res.json({ message: 'Register Admin' })
// });

// @route Post/admin/login

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check for admin email
  const admin = await Admin.findOne({ email });
  if (admin && admin.password == password) {
    res.json({
      // _id: admin.id,
      // fullName: admin.fullName,
      // email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400).send({ message: 'Invalid credentials' });
  }
});

//@route Get/admin/me

const getMe = asyncHandler(async (req, res) => {
  
  res.json({ message: 'Admin data display' });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

module.exports = { loginAdmin, getMe };
