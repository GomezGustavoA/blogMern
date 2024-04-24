const UserSchema = require("../models/user"); // cambiar nombre
const dataTrans = require("../utils/dataTransform");
const dataValid = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    try {
      const passwordHash = await bcrypt.hash(req.body.password, 12);
      req.body.password = passwordHash;

      const cleanData = dataTrans.removeSpacesFromObjectValues(req.body);
      await UserSchema.create(cleanData); // campos a guardar: name, userName, email, password, rol, image

      res.status(201).json({ message: "user created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  loginUser: async (req, res) => {
    try {
      if (!dataValid.allValuesNotEmpty(req.body)) {
        return res
          .status(400)
          .json({ error: "Uno o más campos están vacíos." });
      }

      const cleanData = dataTrans.removeSpacesFromObjectValues(req.body);
      const user = await UserSchema.findOne({ userName: cleanData.userName });

      if (!user || !(await bcrypt.compare(cleanData.password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const { userName, email, _id, rol, image } = user;

      const token = jwt.sign(
        {
          userName,
          email,
          id: _id,
          rol,
        },
        process.env.JWT_SECRET
      );

      res.status(200).json({
        message: "Successful login",
        access: true,
        token,
        user: { userName, image, rol },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserSchema.findById(id);
      if (!user) return res.status(400).json({ message: "User not found" });
      const userJson = user.toJSON();
      res.status(200).json({ user: userJson });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
