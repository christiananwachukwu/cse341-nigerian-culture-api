const express = require('express');
const router = express.Router();

// Placeholder - full routes coming soon
router.get('/', (req, res) => {
  res.json({ message: 'Dishes route is working! 🍲' });
});

module.exports = router;