const express = require('express');
const router = express.Router();

const { getAllTour, newTour, getSingleTour, updateTour, deleteTour } = require('./../controller/tourController')

router.route("/").get(getAllTour).post(newTour);
router.route("/:id").get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;