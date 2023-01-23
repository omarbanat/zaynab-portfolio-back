const express = require('express');
const router = express.Router();
const { getPrevWorkByID } = require('../controllers/informationController');

router.get('/getPrevWorkByID/:ID', getPrevWorkByID);

module.exports = router;
