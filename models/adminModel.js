const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  DOB: { type: Date, required: true },
  password: { type: String, required: true },
 
  // validate: (value) => {
  //   return validator.isEmail(value)
  // }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
