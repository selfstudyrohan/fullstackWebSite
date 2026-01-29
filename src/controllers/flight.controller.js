const Flight = require('../models/Flight.model');

// GET all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET flight by ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE flight
const createFlight = async (req, res) => {
  const flight = new Flight(req.body);
  try {
    const savedFlight = await flight.save();
    res.status(201).json(savedFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE flight
const updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFlight) return res.status(404).json({ message: "Flight not found" });
    res.json(updatedFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE flight
const deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    if (!deletedFlight) return res.status(404).json({ message: "Flight not found" });
    res.json(deletedFlight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllFlights, getFlightById, createFlight, updateFlight, deleteFlight };
