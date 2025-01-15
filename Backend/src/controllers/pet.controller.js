const Pet = require('../models/pet.model');
const { formatResponse } = require('../utils/helpers');
const { paginate } = require('../utils/paginationUtils');
const { PET_STATUSES } = require('../utils/constants');

// Submit a new pet
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
      owner: req.user.id, // Assuming `req.user.id` contains the authenticated user ID
    });

    res.status(201).json(formatResponse(true, pet, 'Pet submitted successfully'));
  } catch (err) {
    next(err);
  }
};

// Example of disabling caching in Express.js
exports.getApprovedPets = async (req, res, next) => {
  try {
    // Disable caching by setting appropriate headers
    res.set('Cache-Control', 'no-store'); // Prevent caching

    const { page = 1, limit = 10 } = req.query; // Set default values for pagination
    const petsQuery = Pet.find({ status: PET_STATUSES.APPROVED });

    // Apply pagination to the query
    const { totalItems, totalPages, offset, limit: actualLimit } = paginate(page, limit, await Pet.countDocuments({ status: PET_STATUSES.APPROVED }));

    // Fetch the paginated pets
    const pets = await petsQuery.skip(offset).limit(actualLimit);

    res.status(200).json(formatResponse(true, { pets, pagination: { totalItems, totalPages, page, limit: actualLimit } }, 'Approved pets fetched successfully'));
  } catch (err) {
    next(err);
  }
};

