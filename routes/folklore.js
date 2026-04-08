const express = require('express');
const router = express.Router();
const folkloreController = require('../controllers/folklore');
const isAuthenticated = require('../middleware/auth');

// GET all folklore - public
router.get('/', folkloreController.getAllFolklore);

// GET single folklore by ID - public
router.get('/:id', folkloreController.getSingleFolklore);

// POST create new folklore - protected
router.post('/', isAuthenticated, folkloreController.createFolklore);

// PUT update folklore by ID - protected
router.put('/:id', isAuthenticated, folkloreController.updateFolklore);

// DELETE folklore by ID - protected
router.delete('/:id', isAuthenticated, folkloreController.deleteFolklore);

module.exports = router;