const express = require("express");
const router = express.Router();
const rulersController = require("../controllers/rulers");
const isAuthenticated = require('../middleware/auth')

// GET all rulers - public
router.get("/", rulersController.getAllRulers);

// GET single ruler by ID - public
router.get("/:id", rulersController.getSingleRuler);

// POST create new ruler - protected
router.post("/", isAuthenticated, rulersController.createRuler);

// PUT update ruler by ID - protected
router.put("/:id", isAuthenticated, rulersController.updateRuler);

// DELETE ruler by ID - protected
router.delete("/:id", isAuthenticated, rulersController.deleteRuler);

module.exports = router;