const express = require('express');
const cors = require('cors');
const flightRoutes = require('./routes/flight.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/flights', flightRoutes); // THIS MUST BE A FUNCTION

app.get('/', (req, res) => {
  res.send('Backend is running');
});

module.exports = app;
