

const Festival = require('../models/Festival');  
  
// GET /festivals — get all festivals  
const getAllFestivals = async (req, res) => {  
  try {  
    const festivals = await Festival.find();  
    res.status(200).json(festivals);  
  } catch (err) {  
    res.status(500).json({ message: 'Server error', error: err.message });  
  }  
};  
  
// GET /festivals/:id — get single festival  
const getFestivalById = async (req, res) => {  
  try {  
    const festival = await Festival.findById(req.params.id);  
    if (!festival) {  
      return res.status(404).json({ message: 'Festival not found' });  
    }  
    res.status(200).json(festival);  
  } catch (err) {  
    res.status(500).json({ message: 'Server error', error: err.message });  
  }  
};  
  
// POST /festivals — create a new festival  
const createFestival = async (req, res) => {  
  try {  
    const { name, region, tribe, dateSeason, duration, traditions, significance } = req.body;  
  
    // Validation — required fields  
    if (!name || !region || !tribe || !dateSeason || !duration || !traditions || !significance) {  
      return res.status(400).json({  
        message: 'Missing required fields: name, region, tribe, dateSeason, duration, traditions, significance'  
      });  
    }  
  
    const festival = new Festival(req.body);  
    const saved = await festival.save();  
    res.status(201).json(saved);  
  } catch (err) {  
    res.status(500).json({ message: 'Server error', error: err.message });  
  }  
};  
  
// PUT /festivals/:id — update a festival  
const updateFestival = async (req, res) => {  
  try {  
    const updated = await Festival.findByIdAndUpdate(  
      req.params.id,  
      req.body,  
      { new: true, runValidators: true }  
    );  
    if (!updated) {  
      return res.status(404).json({ message: 'Festival not found' });  
    }  
    res.status(200).json(updated);  
  } catch (err) {  
    res.status(500).json({ message: 'Server error', error: err.message });  
  }  
};  
  
// DELETE /festivals/:id — delete a festival  
const deleteFestival = async (req, res) => {  
  try {  
    const deleted = await Festival.findByIdAndDelete(req.params.id);  
    if (!deleted) {  
      return res.status(404).json({ message: 'Festival not found' });  
    }  
    res.status(200).json({ message: 'Festival deleted successfully' });  
  } catch (err) {  
    res.status(500).json({ message: 'Server error', error: err.message });  
  }  
};  
  
module.exports = {  
  getAllFestivals,  
  getFestivalById,  
  createFestival,  
  updateFestival,  
  deleteFestival  
};
