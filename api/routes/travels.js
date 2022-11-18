const express = require('express');
const router = express.Router();

const {
   creatTravel,
   getAllTravels,
   getTravelById,
   getTravelByArrayOfIds
} = require('../controllers/travelers');



router.get('/',getAllTravels);
router.post('/',creatTravel);
router.get('/getTravelById/:TravelId',getTravelById);
router.get('/getTravelByArrayOfIds/:TravelArrayOfIds',getTravelByArrayOfIds);



//router.get('/:TravelId',getSdarotLessonsById)

module.exports = router;