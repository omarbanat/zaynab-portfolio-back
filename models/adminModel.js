const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const adminSchema = new Schema({
    fullName: { type: string, required: true },
    email: { type: srting, required: true },
    password: { type: stirng, required: true },
    DOB: { type: date, required: true }


})

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;