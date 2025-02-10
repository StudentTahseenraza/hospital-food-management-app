const express = require('express');
const router = express.Router();
const foodChartController = require('../controllers/foodChartController');

router.post('/', foodChartController.createFoodChart);
router.get('/', foodChartController.getAllFoodCharts);
router.get('/:id', foodChartController.getFoodChartById);
router.put('/:id', foodChartController.updateFoodChart);
router.delete('/:id', foodChartController.deleteFoodChart);

module.exports = router;