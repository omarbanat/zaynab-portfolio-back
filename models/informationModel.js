const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new Schema({
  type: { type: string, required: true },
  title: { type: string, required: true },
  description: { type: string },
  image: { type: string, required: true },
  fullDEscription: { type: string },
});

const Information = mongoose.model('Information', informationSchema);
module.exports = Information;
