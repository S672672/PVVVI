
const express = require('express');
const { submitPet, getApprovedPets } = require('../controllers/pet.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { body } = require('express-validator');

const router = express.Router();

router.post(
  '/',
  authenticate,
  [
    body('name').notEmpty().withMessage('Pet name is required'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('breed').notEmpty().withMessage('Breed is required'),
  ],
  validate,
  submitPet
);


router.get('/', getApprovedPets);

module.exports = router;