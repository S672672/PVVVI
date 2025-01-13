
const Pet = require('../models/pet.model');


exports.approvePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findByIdAndUpdate(id, { isApproved: true }, { new: true });
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json({ message: 'Pet approved successfully', pet });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getUnapprovedPets = async (req, res) => {
  try {
    const pets = await Pet.find({ isApproved: false });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};