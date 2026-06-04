const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { quizLimiter } = require("../middleware/rateLimitMiddleware");
const quizController = require("../controllers/quizController");

router.post(
    "/submit",
    authMiddleware,
    quizLimiter,
    quizController.submitQuiz
);

module.exports = router;