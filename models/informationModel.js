const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  fullDescription: { type: String },
});

const Information = mongoose.model('Informations', informationSchema);
module.exports = Information;
