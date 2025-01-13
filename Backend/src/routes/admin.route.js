const express = require('express');
const { approvePet, getUnapprovedPets } = require('../controllers/admin.controller');
const { authenticate, authorizeAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/:id/approve', authenticate, authorizeAdmin, approvePet);


router.get('/unapproved', authenticate, authorizeAdmin, getUnapprovedPets);

module.exports = router;