const blogsModel = require('../models/blogsModel');

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
