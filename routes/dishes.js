const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishes');

// GET all dishes
router.get('/', dishesController.getAllDishes);

// GET single dish by ID
router.get('/:id', dishesController.getSingleDish);

// POST create new dish
router.post('/', dishesController.createDish);

// PUT update dish by ID
router.put('/:id', dishesController.updateDish);

// DELETE dish by ID
router.delete('/:id', dishesController.deleteDish);

module.exports = router;