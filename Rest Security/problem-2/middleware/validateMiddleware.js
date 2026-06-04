const validator = require("validator");

const validateRegister = (req, res, next) => {
  const { username, email } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ error: "Invalid username" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  next();
};

module.exports = validateRegister;