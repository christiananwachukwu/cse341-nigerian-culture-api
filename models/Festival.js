
const mongoose = require('mongoose');  
  
const festivalSchema = new mongoose.Schema(  
  {  
    name: {  
      type: String,  
      required: true,  
      trim: true  
    },  
    region: {  
      type: String,  
      required: true,  
      trim: true  
    },  
    tribe: {  
      type: String,  
      required: true,  
      trim: true  
    },  
    dateSeason: {  
      type: String,  
      required: true  
    },  
    duration: {  
      type: String,  
      required: true  
    },  
    traditions: {  
      type: [String],  
      required: true  
    },  
    significance: {  
      type: String,  
      required: true  
    },  
    foodsAssociated: {  
      type: [String],  
      default: []  
    },  
    dressCode: {  
      type: String,  
      default: ''  
    },  
    imageUrl: {  
      type: String,  
      default: ''  
    }  
  },  
  { timestamps: true }  
);  
  
module.exports = mongoose.model('Festival', festivalSchema);
