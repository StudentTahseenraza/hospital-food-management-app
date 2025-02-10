const DeliveryPersonnel = require('../models/deliveryPersonnelModel');

// Create a new delivery personnel
const create = async (data) => {
  const newPersonnel = new DeliveryPersonnel(data);
  return await newPersonnel.save();
};

// Get all delivery personnel
const findAll = async () => {
  return await DeliveryPersonnel.find();
};

// Get a specific delivery personnel by ID
const findOne = async (id) => {
  return await DeliveryPersonnel.findById(id);
};

// Update a delivery personnel by ID
const update = async (id, data) => {
  return await DeliveryPersonnel.findByIdAndUpdate(id, data, { new: true });
};

// Delete a delivery personnel by ID
const remove = async (id) => {
  return await DeliveryPersonnel.findByIdAndDelete(id);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};