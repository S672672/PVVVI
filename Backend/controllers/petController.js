const Pet = require('../models/petModel')

exports.createPet = async (req, res) => {
  try {
    const {
      petName,
      species,
      breed,
      size,
      description,
      age,
      spayedNeutered,
      vaccinated,
      trained,
      phoneNumber,
      email,
      address
    } = req.body;
    
    const photos = req.files.map(file => file.filename);

    const newPet = new Pet({
      petName,
      species,
      breed,
      size,
      description,
      age,
      spayedNeutered,
      vaccinated,
      trained,
      phoneNumber,
      email,
      address,
      photos
    });

    await newPet.save();
    res.status(201).json({ message: "Pet listed successfully", pet: newPet });
  } catch (error) {
    res.status(500).json({ message: "Error creating pet listing", error });
  }
};

exports.getAllPets = async (req, res) => {
  try {
      const pets = await Pet.find().select('petName description photos');
      res.status(200).json(pets); 
  } catch (error) {
      res.status(500).json({ message: "Error fetching pets", error });
  }
};
