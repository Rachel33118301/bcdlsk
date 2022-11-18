const express = require('express');
const router = express.Router();

const {
    createPlace,
    getAllPlaces,
    deletPlaceById,
    getTravelByTravelsId
} = require('../controllers/places');

router.get('/:PlaceId',getTravelByTravelsId)
router.get('/',getAllPlaces);
router.post('/',createPlace);
router.delete('/:PlaceId',deletPlaceById);


module.exports = router;