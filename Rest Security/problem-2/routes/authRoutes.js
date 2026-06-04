const express = require("express");
const router = express.Router();

const sanitizeInput = require("../middleware/sanitizeMiddleware");
const validateRegister = require("../middleware/validateMiddleware");
const xssProtection = require("../middleware/xssProtection");

router.post("/register", sanitizeInput, xssProtection, validateRegister, (req, res) => {
  res.json({ message: "User registration secure endpoint working" });
});

router.post("/login", (req, res) => {
  req.session.user = { email: req.body.email };
  res.json({ message: "Login successful" });
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout successful" });
});

module.exports = router;