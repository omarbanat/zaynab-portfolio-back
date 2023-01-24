const express = require('express');
const router = express.Router();
const { updateExperienceID } = require('../controllers/experienceController')
const { protect } = require('../middleware/authMiddleware')


router.put('/updateExperienceID', protect, updateExperienceID);

module.exports = router;



