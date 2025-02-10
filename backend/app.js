const express = require('express');
const mongoose = require('mongoose');
const deliveryPersonnelRoutes = require('./routes/deliveryPersonnelRoutes');
const patientRoutes = require('./routes/patientRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const foodChartRoutes = require('./routes/foodChartRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/delivery-personnel', deliveryPersonnelRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/food-charts', foodChartRoutes);

// Database connection
mongoose
  .connect('mongodb://localhost:27017/hospital-food-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

module.exports = app;