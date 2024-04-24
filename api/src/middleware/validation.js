const jwt = require("jsonwebtoken");
const utils = require("../utils/validation");

module.exports = {
  userValidation: (req, res, next) => {
    if (!utils.allValuesNotEmpty(req.body)) {
      return res.status(400).json({ error: "Uno o más campos están vacíos." });
    }
    if (
      !utils.validEmail(req.body.email) ||
      !utils.validImage(req.body.image)
    ) {
      return res.status(422).json({
        error: "Verificar que el formato de los campos estén correctos.",
      });
    }

    next();
  },
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: "Missing token" });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  },
};
