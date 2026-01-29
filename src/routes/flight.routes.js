const express = require("express");
const router = express.Router();
const {  getAllFlights,createFlight ,
    updateFlight,deleteFlight,getFlightById} = require("../controllers/flight.controller");

router.get("/", getAllFlights);
router.post("/create", createFlight);
router.put("/update/:id", updateFlight);
router.delete("/delete/:id", deleteFlight);
router.get("/:id", getFlightById);

module.exports = router;
