const deliveryPersonnelService = require('../services/deliveryPersonnelService');

// Create a new delivery personnel
const createDeliveryPersonnel = async (req, res) => {
  try {
    const newPersonnel = await deliveryPersonnelService.create(req.body);
    res.status(201).json(newPersonnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all delivery personnel
const getAllDeliveryPersonnel = async (req, res) => {
  try {
    const personnel = await deliveryPersonnelService.findAll();
    res.status(200).json(personnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific delivery personnel by ID
const getDeliveryPersonnelById = async (req, res) => {
  try {
    const personnel = await deliveryPersonnelService.findOne(req.params.id);
    if (!personnel) {
      return res.status(404).json({ message: 'Delivery personnel not found' });
    }
    res.status(200).json(personnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a delivery personnel by ID
const updateDeliveryPersonnel = async (req, res) => {
  try {
    const updatedPersonnel = await deliveryPersonnelService.update(req.params.id, req.body);
    res.status(200).json(updatedPersonnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a delivery personnel by ID
const deleteDeliveryPersonnel = async (req, res) => {
  try {
    await deliveryPersonnelService.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDeliveryPersonnel,
  getAllDeliveryPersonnel,
  getDeliveryPersonnelById,
  updateDeliveryPersonnel,
  deleteDeliveryPersonnel,
};