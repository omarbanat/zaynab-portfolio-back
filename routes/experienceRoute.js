const express = require('express');
const { response } = require('express');
const router = express.Router();
const { updateExperienceID } = require('../controllers/experienceController')
const { protect } = require('../middleware/authMiddleware')


router.put('/updateExperienceID/:id',protect , updateExperienceID);

module.exports = router;



