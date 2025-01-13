const Pet = require('../models/pet.model');

exports.submitPet = async (req, res) => {
  try {
    const { name, age, breed, description, image } = req.body;
    const pet = new Pet({ name, age, breed, description, image, submittedBy: req.user.id });
    await pet.save();
    res.status(201).json({ message: 'Pet submitted successfully. Awaiting approval.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getApprovedPets = async (req, res) => {
  try {
    const pets = await Pet.find({ isApproved: true });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};