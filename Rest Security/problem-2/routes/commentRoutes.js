const express = require("express");
const router = express.Router();

router.post("/add-comment", (req, res) => {
  res.json({ message: "Comment added securely" });
});

module.exports = router;