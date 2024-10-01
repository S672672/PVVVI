const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  category: { type: String },
  breed: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  status: { type: String, default: "Available" }, // Available, Adopted
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Pet", petSchema);
