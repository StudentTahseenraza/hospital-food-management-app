const mongoose = require('mongoose');

const foodChartSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  meals: [
    {
      mealType: { type: String, required: true }, // e.g., Breakfast, Lunch, Dinner
      items: [{ type: String }],
      instructions: { type: String },
    },
  ],
});

module.exports = mongoose.model('FoodChart', foodChartSchema);