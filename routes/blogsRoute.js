const express = require('express');
const router = express.Router();
const { updateBlogsByID } = require('../controllers/blogsController')
const { protect } = require('../middleware/authMiddleware')


router.put('/updateBlogsByID/:id', protect, updateBlogsByID);

module.exports = router;
