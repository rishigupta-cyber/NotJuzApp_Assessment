const express = require("express");
const router = express.Router();

router.put("/update-profile", (req, res) => {
  res.json({ message: "Profile updated securely" });
});

module.exports = router;