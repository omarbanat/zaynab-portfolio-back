const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/fileController');
const fileMiddleware = require('../middleware/fileMiddleware');

router.post('/upload', fileMiddleware, uploadFile);

module.exports = router;
