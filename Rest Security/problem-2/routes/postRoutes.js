const express = require("express");
const router = express.Router();

router.post("/create-post", (req, res) => {
  res.json({ message: "Post created securely" });
});

module.exports = router;