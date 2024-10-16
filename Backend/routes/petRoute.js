const express = require('express');
const multer = require('multer');
const petController = require('../controllers/petController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
router.post('/create', upload.array('photos', 5), petController.createPet);
router.get('/', petController.getAllPets);

module.exports = router;
