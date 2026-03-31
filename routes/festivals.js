const express = require('express');  
const router = express.Router();  
const {  
  getAllFestivals,  
  getFestivalById,  
  createFestival,  
  updateFestival,  
  deleteFestival  
} = require('../controllers/festivals');  
  
router.get('/', getAllFestivals);  
router.get('/:id', getFestivalById);  
router.post('/', createFestival);  
router.put('/:id', updateFestival);  
router.delete('/:id', deleteFestival);  
  
module.exports = router;
