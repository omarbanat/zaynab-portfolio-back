const express = require('express');
const router = express.Router();
const { updateBlogsID } = require('../controllers/blogsController')
const { protect } = require('../middleware/authMiddleware')


router.put('/updateBlogsID', protect, updateBlogsID);

module.exports = router;
