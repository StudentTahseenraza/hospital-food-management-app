const FoodChart = require('../models/foodChartModel');

// Create a new food chart
const create = async (foodChart) => {
  const newFoodChart = new FoodChart(foodChart);
  return await newFoodChart.save();
};

// Retrieve all food charts
const findAll = async () => {
  return await FoodChart.find();
};

// Retrieve a specific food chart by ID
const findOne = async (id) => {
  return await FoodChart.findById(id);
};

// Update a food chart by ID
const update = async (id, updatedFoodChart) => {
  return await FoodChart.findByIdAndUpdate(id, updatedFoodChart, { new: true });
};

// Delete a food chart by ID
const remove = async (id) => {
  return await FoodChart.findByIdAndDelete(id);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};