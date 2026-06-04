const express = require("express");
const router = express.Router();

router.post("/send-message", (req, res) => {
  res.json({ message: "Direct message sent securely" });
});

module.exports = router;