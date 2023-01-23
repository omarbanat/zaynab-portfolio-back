const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  fullDEscription: { type: String },
});

const Information = mongoose.model('Information', informationSchema);
module.exports = Information;
