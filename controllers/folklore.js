const Folklore = require('../models/folklore');

// GET all folklore
const getAllFolklore = async (req, res) => {
  try {
    const folklore = await Folklore.find();
    res.status(200).json(folklore);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching folklore', error: error.message });
  }
};

// GET single folklore by ID
const getSingleFolklore = async (req, res) => {
  try {
    const folklore = await Folklore.findById(req.params.id);
    if (!folklore) {
      return res.status(404).json({ message: 'Folklore not found' });
    }
    res.status(200).json(folklore);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching folklore', error: error.message });
  }
};

// POST create new folklore
const createFolklore = async (req, res) => {
  try {
    const {
      title,
      tribe,
      characters,
      storySummary,
      moralLesson,
      storyType,
      languageOfOrigin,
      ageGroup,
      region
    } = req.body;

    // Validation
    if (!title || !tribe || !characters || !storySummary || !moralLesson || !storyType || !languageOfOrigin || !ageGroup || !region) {
      return res.status(400).json({
        message: 'Please provide all required fields: title, tribe, characters, storySummary, moralLesson, storyType, languageOfOrigin, ageGroup, region'
      });
    }

    const newFolklore = new Folklore({
      title,
      tribe,
      characters,
      storySummary,
      moralLesson,
      storyType,
      languageOfOrigin,
      ageGroup,
      region
    });

    const savedFolklore = await newFolklore.save();
    res.status(201).json(savedFolklore);
  } catch (error) {
    res.status(500).json({ message: 'Error creating folklore', error: error.message });
  }
};

// PUT update folklore by ID
const updateFolklore = async (req, res) => {
  try {
    const folklore = await Folklore.findById(req.params.id);
    if (!folklore) {
      return res.status(404).json({ message: 'Folklore not found' });
    }

    const updatedFolklore = await Folklore.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedFolklore);
  } catch (error) {
    res.status(500).json({ message: 'Error updating folklore', error: error.message });
  }
};

// DELETE folklore by ID
const deleteFolklore = async (req, res) => {
  try {
    const folklore = await Folklore.findById(req.params.id);
    if (!folklore) {
      return res.status(404).json({ message: 'Folklore not found' });
    }

    await Folklore.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Folklore deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting folklore', error: error.message });
  }
};

module.exports = {
  getAllFolklore,
  getSingleFolklore,
  createFolklore,
  updateFolklore,
  deleteFolklore
};