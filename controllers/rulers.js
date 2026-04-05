const Ruler = require('../models/rulers');

// GET all rulers
const getAllRulers = async (req, res) => {
  try {
    const rulers = await Ruler.find();
    res.status(200).json(rulers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rulers', error: error.message });
  }
};

// GET single ruler by ID
const getSingleRuler = async (req, res) => {
  try {
    const ruler = await Ruler.findById(req.params.id);
    if (!ruler) {
      return res.status(404).json({ message: 'Ruler not found' });
    }
    res.status(200).json(ruler);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ruler', error: error.message });
  }
};

// POST create new ruler
const createRuler = async (req, res) => {
  try {
    const {
      title,
      kingdom,
      tribe,
      currentHolder,
      historicalSignificance,
      coronationTraditions,
      region,
      state,
      foundedYear
    } = req.body;

    // Validation
    if (!title || !kingdom || !tribe || !currentHolder || !historicalSignificance || !coronationTraditions || !region || !state || !foundedYear) {
      return res.status(400).json({
        message: 'Please provide all required fields: title, kingdom, tribe, currentHolder, historicalSignificance, coronationTraditions, region, state, foundedYear'
      });
    }

    const newRuler = new Ruler({
      title,
      kingdom,
      tribe,
      currentHolder,
      historicalSignificance,
      coronationTraditions,
      region,
      state,
      foundedYear
    });

    const savedRuler = await newRuler.save();
    res.status(201).json(savedRuler);
  } catch (error) {
    res.status(500).json({ message: 'Error creating ruler', error: error.message });
  }
};

// PUT update ruler by ID
const updateRuler = async (req, res) => {
  try {
    const ruler = await Ruler.findById(req.params.id);
    if (!ruler) {
      return res.status(404).json({ message: 'Ruler not found' });
    }

    const updatedRuler = await Ruler.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedRuler);
  } catch (error) {
    res.status(500).json({ message: 'Error updating ruler', error: error.message });
  }
};

// DELETE ruler by ID
const deleteRuler = async (req, res) => {
  try {
    const ruler = await Ruler.findById(req.params.id);
    if (!ruler) {
      return res.status(404).json({ message: 'Ruler not found' });
    }

    await Ruler.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Ruler deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ruler', error: error.message });
  }
};

module.exports = {
  getAllRulers,
  getSingleRuler,
  createRuler,
  updateRuler,
  deleteRuler
};