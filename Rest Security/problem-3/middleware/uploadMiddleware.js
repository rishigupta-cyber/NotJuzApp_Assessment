const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowed = ["application/pdf"];

    if (!allowed.includes(file.mimetype)) {
        return cb(new Error("Only PDF files allowed"));
    }

    cb(null, true);
};

module.exports = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter
});