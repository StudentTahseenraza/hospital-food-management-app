const pantryService = require('../services/pantryService');

// Get all pantry items
const getAllPantryItems = async (req, res) => {
  try {
    const items = await pantryService.findAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new pantry item
const addPantryItem = async (req, res) => {
  try {
    const newItem = await pantryService.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a pantry item
const updatePantryItem = async (req, res) => {
  try {
    const updatedItem = await pantryService.updateItem(req.params.id, req.body);
    if (!updatedItem) {
      return res.status(404).json({ message: 'Pantry item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a pantry item
const deletePantryItem = async (req, res) => {
  try {
    const deletedItem = await pantryService.deleteItem(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Pantry item not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPantryItems,
  addPantryItem,
  updatePantryItem,
  deletePantryItem,
};