const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  publishedDate: { type: Date, required: true },
});

const Blogs = mongoose.model('Blogs', blogsSchema);
module.exports = Blogs;
