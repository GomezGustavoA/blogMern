const jwt = require("jsonwebtoken");
const utils = require("../utils/validation");
const CustomError = require("../utils/handlerErrors");
const { removeSpacesFromObjectValues } = require("../utils/dataTransform");

module.exports = {
  userValidation: (req, res, next) => {
    try {
      if (!utils.allValuesNotEmpty(req.body)) {
        throw new CustomError(400, "Uno o más campos están vacíos.");
      }
      if (
        !utils.validEmail(req.body.email) ||
        !utils.validImage(req.body.image)
      ) {
        throw new CustomError(
          422,
          "Verificar que el formato de los campos estén correctos."
        );
      }
      next();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  PostValidation: (req, res, next) => {
    try {
      if (!utils.allValuesNotEmpty(req.body)) {
        throw new CustomError(400, "Uno o más campos están vacíos.");
      } else {
        req.body = removeSpacesFromObjectValues(req.body);
      }
      if (!utils.validateContentLength(req.body.title, 100)) {
        throw new CustomError(400, "Lalongitud de titulo supera el limite.");
      }
      if (!utils.validateContentLength(req.body.content, 200000)) {
        throw new CustomError(400, "Lalongitud de titulo supera el limite.");
      }
      if (!utils.validImage(req.body.image)) {
        throw new CustomError(
          400,
          "Verificar que el formato de los campos estén correctos."
        );
      }

      next();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  commentValidation: (req, res, next) => {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new CustomError(400, "req.body está vacío.");
      }
      if (!utils.allValuesNotEmpty(req.body)) {
        throw new CustomError(400, "Uno o más campos están vacíos.");
      } else {
        req.body = removeSpacesFromObjectValues(req.body);
      }
      if (!utils.validateContentLength(req.body.text, 2000)) {
        throw new CustomError(400, "Lalongitud de titulo supera el limite.");
      }

      next();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new CustomError(401, "Missing token");
      }

      req.user = jwt.verify(token, process.env.JWT_SECRET);

      if (!req.user.id) {
        throw new CustomError(401, "Missing id");
      }
      next();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  rolValidation: (req, res, next) => {
    try {
      const { rol } = req.user;
      if (rol !== "admin") {
        throw new CustomError(
          403,
          "Unauthorized access. Administrator permissions are required."
        );
      }
      next();
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
};
