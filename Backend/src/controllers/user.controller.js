const User = require('../models/user.model');
const { generateToken } = require('../utils/jwtUtils');
const { formatResponse } = require('../utils/helpers');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json(formatResponse(false, null, 'User already exists'));
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user);

    res.status(201).json(formatResponse(true, { user, token }, 'User registered successfully'));
  } catch (err) {
    next(err);
  }
};


exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json(formatResponse(false, null, 'Invalid credentials'));
    }

    const token = generateToken(user);
    res.status(200).json(formatResponse(true, { user, token }, 'Login successful'));
  } catch (err) {
    next(err);
  }
};