const sanitizeHtml = require("sanitize-html");

const sanitizeInput = (req, res, next) => {
  for (let key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeHtml(req.body[key], {
        allowedTags: ["b", "i", "a"],
        allowedAttributes: {
          a: ["href"]
        }
      });
    }
  }
  next();
};

module.exports = sanitizeInput;