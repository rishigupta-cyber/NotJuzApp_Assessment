const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const uploadController = require("../controllers/uploadController");

router.post(
    "/pdf",
    authMiddleware,
    upload.single("file"),
    uploadController.uploadFile
);

module.exports = router;