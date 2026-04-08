const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishes');
const isAuthenticated = require('../middleware/auth');

// GET all dishes - public
router.get('/', dishesController.getAllDishes);

// GET single dish by ID - public
router.get('/:id', dishesController.getSingleDish);

// POST create new dish - protected
router.post('/', isAuthenticated, dishesController.createDish);

// PUT update dish by ID - protected
router.put('/:id', isAuthenticated, dishesController.updateDish);

// DELETE dish by ID - protected
router.delete('/:id', isAuthenticated, dishesController.deleteDish);

module.exports = router;