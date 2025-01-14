const Pet = require('../models/pet.model');
const { formatResponse } = require('../utils/helpers');
const { paginate } = require('../utils/paginationUtils');
const { PET_STATUSES } = require('../utils/constants');

exports.submitPet = async (req, res, next) => {
  try {
    const { name, age, breed, description } = req.body;
    const imageUrl = req.file ? req.file.cloudinaryUrl : null;

    if (!imageUrl) {
      return res.status(400).json(formatResponse(false, null, 'Image upload failed'));
    }

    const pet = await Pet.create({
      name,
      age,
      breed,
      description,
      imageUrl,
      status: PET_STATUSES.PENDING,
      owner: req.user.id,
    });

    res.status(201).json(formatResponse(true, pet, 'Pet submitted successfully'));
  } catch (err) {
    next(err);
  }
};

exports.getApprovedPets = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const petsQuery = Pet.find({ status: PET_STATUSES.APPROVED });
    const pets = await paginate(petsQuery, { page, limit });

    res.status(200).json(formatResponse(true, pets, 'Approved pets fetched successfully'));
  } catch (err) {
    next(err);
  }
};