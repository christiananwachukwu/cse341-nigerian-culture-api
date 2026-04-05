const mongoose = require('mongoose');

const folkloreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    tribe: {
      type: String,
      required: true,
      trim: true
    },
    characters: {
      type: [String],
      required: true
    },
    storySummary: {
      type: String,
      required: true
    },
    moralLesson: {
      type: String,
      required: true
    },
    storyType: {
      type: String,
      required: true,
      enum: ['folktale', 'legend', 'myth', 'fable', 'epic']
    },
    languageOfOrigin: {
      type: String,
      required: true,
      trim: true
    },
    ageGroup: {
      type: String,
      required: true,
      enum: ['children', 'adults', 'all ages']
    },
    region: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Folklore', folkloreSchema);