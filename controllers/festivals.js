const Festival = require('../models/Festival');

// GET all
const getAllFestivals = async (req, res) => {
  try {
    const festivals = await Festival.find();
    return res.status(200).json(festivals);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET one
const getFestivalById = async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id);

    if (!festival) {
      return res.status(404).json({ message: 'Festival not found' });
    }

    return res.status(200).json(festival);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// CREATE (WITH SAFE VALIDATION)
const createFestival = async (req, res) => {
  try {
    const { name, region, tribe, dateSeason, duration, traditions, significance } = req.body;

    // ✅ Required fields check
    if (!name || !region || !tribe || !dateSeason || !duration || !traditions || !significance) {
      return res.status(400).json({
        message: 'Missing required fields'
      });
    }

    // ✅ Ensure traditions is an array
    if (!Array.isArray(traditions)) {
      return res.status(400).json({
        message: 'Traditions must be an array'
      });
    }

    const festival = new Festival(req.body);
    const saved = await festival.save();

    return res.status(201).json(saved);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// UPDATE
const updateFestival = async (req, res) => {
  try {
    const updated = await Festival.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Festival not found' });
    }

    return res.status(200).json(updated);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// DELETE
const deleteFestival = async (req, res) => {
  try {
    const deleted = await Festival.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Festival not found' });
    }

    return res.status(200).json({ message: 'Festival deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllFestivals,
  getFestivalById,
  createFestival,
  updateFestival,
  deleteFestival
};