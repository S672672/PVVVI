const { formatResponse } = require('../utils/helpers');
const { PET_STATUSES } = require('../utils/constants');


exports.approvePet = async (req, res, next) => {
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


exports.getUnapprovedPets = async (req, res, next) => {
  try {
    const unapprovedPets = await Pet.find({ status: PET_STATUSES.PENDING });

    res.status(200).json(formatResponse(true, unapprovedPets, 'Unapproved pets fetched successfully'));
  } catch (err) {
    next(err);
  }
};