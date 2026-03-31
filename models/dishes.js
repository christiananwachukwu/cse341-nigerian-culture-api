const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    tribe: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    preparation: {
      type: String,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
    servingStyle: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    nutritionalNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Dish", dishSchema);
