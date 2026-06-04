const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const courseController = require("../controllers/courseController");

router.post(
    "/create",
    authMiddleware,
    roleMiddleware("instructor"),
    courseController.createCourse
);

router.get(
    "/my-courses",
    authMiddleware,
    roleMiddleware("instructor"),
    courseController.getMyCourses
);

module.exports = router;