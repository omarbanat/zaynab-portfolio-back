module.exports = router;
const express = require('express');
const router = express.Router();
const {
  readBlogByID,
  readAllBlogs,
  createBlog,
  deleteBlogByID,
  updateBlogsByID,
} = require('../controllers/blogsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', readAllBlogs);
router.post('/', createBlog);
router.get('/:id', readBlogByID);
router.delete('/:id', deleteBlogByID);

router.put('/updateBlogsByID/:id', protect, updateBlogsByID);

module.exports = router;
