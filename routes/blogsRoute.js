module.exports = router;
const express = require('express');
const router = express.Router();
const {
  readBlogByID,
  createBlog,
  deleteBlogByID,
  getAllBlogs,
  updateBlogsByID,
} = require('../controllers/blogsController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createBlog);
router.get('/:id', readBlogByID);
router.delete('/:id', deleteBlogByID);

router.put('/updateBlogsByID/:id', protect, updateBlogsByID);
router.get('/getAllBlogs', protect, getAllBlogs);

module.exports = router;
