const mongoose = require('mongoose');

const pantryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('PantryItem', pantryItemSchema);