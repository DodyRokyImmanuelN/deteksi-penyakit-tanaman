const express = require("express");
const { diagnoseImage } = require("../controllers/diagnoseController");
const upload = require("../middleware/upload");

const router = express.Router();

// Route diagnosa
router.post("/", upload.single("image"), diagnoseImage);

module.exports = router;
