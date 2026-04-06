const express = require('express');
const router = express.Router();

const {
  getAllFestivals,
  getFestivalById,
  createFestival,
  updateFestival,
  deleteFestival
} = require('../controllers/festivals');

// 🔐 Import auth middleware
const isAuthenticated = require('../middleware/auth');

// 🟢 Public routes
router.get('/', getAllFestivals);
router.get('/:id', getFestivalById);

// 🔒 Protected routes (require login)
router.post('/', isAuthenticated, createFestival);
router.put('/:id', isAuthenticated, updateFestival);

// 🟡 Optional: protect delete (recommended)
router.delete('/:id', isAuthenticated, deleteFestival);

module.exports = router;