const express = require('express');
const router = express.Router();
const { getPrevWorkByID,updatePrevWorkByID, insertPrevWork,deleteProvWorkByID} = require('../controllers/informationController');
const { protect } = require('../middleware/authMiddleware');


router.get('/getPrevWorkByID/:ID', getPrevWorkByID);
router.put('/updatePrevWorkByID/:ID',protect,updatePrevWorkByID);
router.delete('/deleteProvWorkByID/:ID',protect,deleteProvWorkByID);



module.exports = router;


