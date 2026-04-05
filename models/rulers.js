const mongoose = require('mongoose');

const rulerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    kingdom: {
      type: String,
      required: true,
      trim: true
    },
    tribe: {
      type: String,
      required: true,
      trim: true
    },
    currentHolder: {
      type: String,
      required: true,
      trim: true
    },
    historicalSignificance: {
      type: String,
      required: true
    },
    coronationTraditions: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    foundedYear: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ruler', rulerSchema);