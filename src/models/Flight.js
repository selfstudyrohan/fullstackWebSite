const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    airline: String,
    flightNumber: String,
    from: String,
    to: String,
    departureTime: String,
    arrivalTime: String,
    price: Number,
    seatsAvailable: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);
