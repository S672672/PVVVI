const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  age: { type: String, required: true },
  spayedNeutered: { type: String, required: true },
  vaccinated: { type: String, required: true },
  trained: { type: [String], required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  photos: { type: [String] },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
