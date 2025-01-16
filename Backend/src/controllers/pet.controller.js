const Pet = require('../models/pet.model');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');

// Submit a new pet
const submitPet = asyncHandler(async (req, res) => {
    const { name, age, breed, description } = req.body;
    const imageUrl = req.file ? req.file.cloudinaryUrl : null;

    if (!imageUrl) {
        throw new ApiError(400, 'Image upload failed');
    }

    const pet = await Pet.create({
        name,
        age,
        breed,
        description,
        imageUrl,
        owner: req.user.id,
    });

    return ApiResponse.success(res, pet, 'Pet submitted successfully', 201);
});

// Get all pets
const getAllPets = asyncHandler(async (req, res) => {
    const pets = await Pet.find();

    if (!pets.length) {
        throw new ApiError(404, 'No pets found');
    }

    return ApiResponse.success(res, pets, 'Pets fetched successfully');
});

export {submitPet,getAllPets}