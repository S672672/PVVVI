const express = require("express");
const multer = require("multer");
const { createPet } = require("../controllers/petContoller");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post("/create", upload.array("photos", 10), createPet);

module.exports = router;
