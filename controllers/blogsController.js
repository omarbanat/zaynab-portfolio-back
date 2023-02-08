const Blog = require('../models/blogsModel');

//read each blog by its ID
exports.readBlogByID = async (req, res) => {
  const batata = await Blog.findById(req.params.id);
  console.log(batata);
  res.json(batata);
};

//delete a blog by its id
exports.deleteBlogByID = async (req, res) => {
  const batatas = await Blog.findByIdAndRemove(req.params.id);
  console.log(batatas);
  res.json(batatas);
};

//create a blog
exports.createBlog = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: 'Error' });
    } else {
      const createdblog = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        //publishedDate: req.body.publishedDate,
      });
      return res.status(200).json(createdblog);
    }
  } catch (err) {
    console.log('error', err);
  }
};

exports.getAllBlogs = (req, res) => {
  blogsModel.find({}, (err, data) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.send({ status: 200, data });
  });
};

exports.updateBlogsByID = async (req, res) => {
  try {
    //update by id
    await blogsModel.updateOne(
      { _id: req.params.ID },
      {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        publishedDate: req.body.publishedDate,
      }
    );

    //return success
    res.json('Updated');
  } catch (err) {
    //return error
    res.json({ error: err.message });
  }
};
