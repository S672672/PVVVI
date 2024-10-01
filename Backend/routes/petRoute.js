const express = require('express');
const multer = require('multer');
const Pet = require('../models/petModel');
const auth = require('../MiddleWare/authMiddleWare'); // Middleware for auth check

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Give away a pet (create a pet post)
router.post('/giveaway', auth, upload.single('image'), async (req, res) => {
  const { name, age, breed, description } = req.body;

  try {
    const pet = new Pet({
      name,
      age,
      breed,
      description,
      imageUrl: req.file.path,
      owner: req.user.id,
    });
    await pet.save();
    res.status(201).json({ message: 'Pet added for giveaway', pet });
  } catch (error) {
    res.status(500).json({ message: 'Error adding pet', error });
  }
});

// View all available pets
router.get('/available', async (req, res) => {
  try {
    const pets = await Pet.find({ status: 'Available' });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pets', error });
  }
});

// Adopt a pet (update status)
router.post('/adopt/:id', auth, async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    pet.status = 'Adopted';
    await pet.save();
    res.json({ message: 'Pet adopted successfully', pet });
  } catch (error) {
    res.status(500).json({ message: 'Error adopting pet', error });
  }
});

module.exports = router;
