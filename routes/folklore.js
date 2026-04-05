const express = require('express');
const router = express.Router();
const folkloreController = require('../controllers/folklore');

// GET all folklore
router.get('/', folkloreController.getAllFolklore);

// GET single folklore by ID
router.get('/:id', folkloreController.getSingleFolklore);

// POST create new folklore
router.post('/', folkloreController.createFolklore);

// PUT update folklore by ID
router.put('/:id', folkloreController.updateFolklore);

// DELETE folklore by ID
router.delete('/:id', folkloreController.deleteFolklore);

module.exports = router;