const express = require("express");
const router = express.Router();
const rulersController = require("../controllers/rulers");

// GET all rulers
router.get("/", rulersController.getAllRulers);

// GET single ruler by ID
router.get("/:id", rulersController.getSingleRuler);

// POST create new ruler
router.post("/", rulersController.createRuler);

// PUT update ruler by ID
router.put("/:id", rulersController.updateRuler);

// DELETE ruler by ID
router.delete("/:id", rulersController.deleteRuler);

module.exports = router;
