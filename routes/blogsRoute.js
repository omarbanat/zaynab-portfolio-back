const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  updateBlogsByID,
} = require('../controllers/blogsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/getAllBlogs', protect, getAllBlogs);
router.put('/updateBlogsByID/:ID', protect, updateBlogsByID);

module.exports = router;
