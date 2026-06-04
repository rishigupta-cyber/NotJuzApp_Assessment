const xss = require("xss");

const xssProtection = (req, res, next) => {
  for (let key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = xss(req.body[key]);
    }
  }
  next();
};

module.exports = xssProtection;