const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  position: { type: String, required: true },
  companyName: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  startDate: { type: date, required: true },
  endDate: { type: date, required: true },
  tasks: { type: String, required: true },
  skills: { type: String, required: true },
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
