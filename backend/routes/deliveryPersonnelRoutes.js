const express = require('express');
const router = express.Router();
const deliveryPersonnelController = require('../controllers/deliveryPersonnelController');

router.post('/', deliveryPersonnelController.createDeliveryPersonnel);
router.get('/', deliveryPersonnelController.getAllDeliveryPersonnel);
router.get('/:id', deliveryPersonnelController.getDeliveryPersonnelById);
router.put('/:id', deliveryPersonnelController.updateDeliveryPersonnel);
router.delete('/:id', deliveryPersonnelController.deleteDeliveryPersonnel);

module.exports = router;