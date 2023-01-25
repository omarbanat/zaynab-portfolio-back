const express = require('express');
const router = express.Router();
const { getPrevWorkByID, getAllInformation } = require('../controllers/informationController');

router.get('/', () => {
    console.log("TEST")
})

router.get('/getPrevWorkByID/:ID', getPrevWorkByID);
router.get('/getAllInformation', getAllInformation);
module.exports = router;
