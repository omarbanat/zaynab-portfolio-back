const express = require('express');
const router = express.Router();
const {
  getAllExperiences,
  updateExperienceID,
} = require('../controllers/experienceController');
const { protect } = require('../middleware/authMiddleware');

router.get('/getAll', getAllExperiences);
router.put('/updateExperienceID/:id', protect, updateExperienceID);

module.exports = router;
