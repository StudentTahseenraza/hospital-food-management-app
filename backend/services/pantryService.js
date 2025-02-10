const PantryItem = require('../models/pantryItemModel');

// Create a new pantry item
const createItem = async (item) => {
  const newItem = new PantryItem(item);
  return await newItem.save();
};

// Get all pantry items
const findAllItems = async () => {
  return await PantryItem.find();
};

// Get a specific pantry item by ID
const findItemById = async (id) => {
  return await PantryItem.findById(id);
};

// Update a pantry item by ID
const updateItem = async (id, updatedItem) => {
  return await PantryItem.findByIdAndUpdate(id, updatedItem, { new: true });
};

// Delete a pantry item by ID
const deleteItem = async (id) => {
  return await PantryItem.findByIdAndDelete(id);
};

module.exports = {
  createItem,
  findAllItems,
  findItemById,
  updateItem,
  deleteItem,
};