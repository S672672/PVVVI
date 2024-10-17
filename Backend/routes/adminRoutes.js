const express = require('express');
const router = express.Router();
const { getCredentials } = require('../controllers/adminController');

router.get('/credentials', getCredentials);

module.exports = router;