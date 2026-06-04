const rateLimit = require("express-rate-limit");

exports.loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many login attempts. Try again later."
    }
});

exports.quizLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: {
        success: false,
        message: "Too many quiz submissions."
    }
});

exports.apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});