const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');

router.get('/', pantryController.getAllPantryItems);
router.post('/', pantryController.addPantryItem);
router.put('/:id', pantryController.updatePantryItem);
router.delete('/:id', pantryController.deletePantryItem);

module.exports = router;