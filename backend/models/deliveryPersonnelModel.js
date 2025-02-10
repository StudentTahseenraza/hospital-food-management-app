const mongoose = require('mongoose');

const deliveryPersonnelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  assignedTasks: [{ type: String }],
});

module.exports = mongoose.model('DeliveryPersonnel', deliveryPersonnelSchema);