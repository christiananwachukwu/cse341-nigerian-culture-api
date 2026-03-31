const Dish = require('../models/dishes');

// GET all dishes
const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dishes', error: error.message });
  }
};

// GET single dish by ID
const getSingleDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dish', error: error.message });
  }
};

// POST create new dish
const createDish = async (req, res) => {
  try {
    const { name, region, tribe, ingredients, preparation, occasion, servingStyle, imageUrl, nutritionalNotes } = req.body;

    // Validation
    if (!name || !region || !tribe || !ingredients || !preparation || !occasion || !servingStyle) {
      return res.status(400).json({ message: 'Please provide all required fields: name, region, tribe, ingredients, preparation, occasion, servingStyle' });
    }

    const newDish = new Dish({
      name,
      region,
      tribe,
      ingredients,
      preparation,
      occasion,
      servingStyle,
      imageUrl,
      nutritionalNotes
    });

    const savedDish = await newDish.save();
    res.status(201).json(savedDish);
  } catch (error) {
    res.status(500).json({ message: 'Error creating dish', error: error.message });
  }
};

// PUT update dish by ID
const updateDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    const updatedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json({ message: 'Error updating dish', error: error.message });
  }
};

// DELETE dish by ID
const deleteDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    await Dish.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting dish', error: error.message });
  }
};

module.exports = {
  getAllDishes,
  getSingleDish,
  createDish,
  updateDish,
  deleteDish
};