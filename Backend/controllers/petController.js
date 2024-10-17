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

exports.getPetById = async (req, res) => {
  console.log("Request parameters:", req.params);
  try {
      const pet = await Pet.findById(req.params.id).select('petName age species breed medical description photos');
      if (!pet) {
          console.log("Pet not found for ID:", req.params.id);
          return res.status(404).json({ message: "Pet not found" });
      }
      res.status(200).json(pet);
  } catch (error) {
      console.error("Error fetching pet:", error);
      res.status(500).json({ message: "Error fetching pet", error: error.message });
  }
};



exports.approvePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findByIdAndUpdate(id, { approved: true }, { new: true });
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.status(200).json({ message: "Pet approved successfully", pet });
  } catch (error) {
    res.status(500).json({ message: "Error approving pet", error });
  }
};

