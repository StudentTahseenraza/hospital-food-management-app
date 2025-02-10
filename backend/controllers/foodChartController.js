const foodChartService = require('../services/foodChartService');

// Create a new food chart
const createFoodChart = async (req, res) => {
  try {
    const newFoodChart = await foodChartService.create(req.body);
    res.status(201).json(newFoodChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all food charts
const getAllFoodCharts = async (req, res) => {
  try {
    const foodCharts = await foodChartService.findAll();
    res.status(200).json(foodCharts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve a specific food chart by ID
const getFoodChartById = async (req, res) => {
  try {
    const foodChart = await foodChartService.findOne(req.params.id);
    if (!foodChart) {
      return res.status(404).json({ message: 'Food chart not found' });
    }
    res.status(200).json(foodChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a food chart by ID
const updateFoodChart = async (req, res) => {
  try {
    const updatedFoodChart = await foodChartService.update(req.params.id, req.body);
    if (!updatedFoodChart) {
      return res.status(404).json({ message: 'Food chart not found' });
    }
    res.status(200).json(updatedFoodChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a food chart by ID
const deleteFoodChart = async (req, res) => {
  try {
    const deletedFoodChart = await foodChartService.remove(req.params.id);
    if (!deletedFoodChart) {
      return res.status(404).json({ message: 'Food chart not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFoodChart,
  getAllFoodCharts,
  getFoodChartById,
  updateFoodChart,
  deleteFoodChart,
};