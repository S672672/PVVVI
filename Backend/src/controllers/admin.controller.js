const { formatResponse } = require('../utils/helpers');
const { PET_STATUSES } = require('../utils/constants');
const {Pet} = require("../models/pet.model")


const approvePet = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json(formatResponse(false, null, 'Pet not found'));
    }

    pet.status = PET_STATUSES.APPROVED;
    await pet.save();

    res.status(200).json(formatResponse(true, pet, 'Pet approved successfully'));
  } catch (err) {
    next(err);
  }
};


const getUnapprovedPets = async (req, res, next) => {
  try {
    const unapprovedPets = await Pet.find({ status: PET_STATUSES.PENDING });

    res.status(200).json(formatResponse(true, unapprovedPets, 'Unapproved pets fetched successfully'));
  } catch (err) {
    next(err);
  }
};

const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findById(id);
    if (!pet) {
      return res
        .status(404)
        .json(ApiResponse.error("Pet not found", 404));
    }

    await pet.remove();

    return res
      .status(200)
      .json(ApiResponse.success("Pet deleted successfully", {}));
  } catch (error) {
    return res.status(500).json(ApiResponse.error(error.message, 500));
  }
};

module.exports = {approvePet,getUnapprovedPets,deletePet}