// src/routes/userRoutes.js
const express = require('express');
const { register, login } = require('../controllers/user.controller');
const { validate } = require('../middlewares/validate.middleware');
const { body } = require('express-validator');

const router = express.Router();

// User registration route
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  validate,
  register
);

// User login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  login
);

module.exports = router;