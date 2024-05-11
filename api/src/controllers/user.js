const CustomError = require("../utils/handlerErrors");
const User = require("../models/user"); // cambiar nombre
const dataTrans = require("../utils/dataTransform");
const dataValid = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    try {
      const existingUsername = await User.findOne({
        userName: req.body.userName,
      });
      if (existingUsername) {
        throw new CustomError(400, "userName");
      }

      const existingEmail = await User.findOne({ email: req.body.email });
      if (existingEmail) {
        throw new CustomError(400, "email");
      }
      const passwordHash = await bcrypt.hash(req.body.password, 12);
      req.body.password = passwordHash;

      const cleanData = dataTrans.removeSpacesFromObjectValues(req.body);
      await User.create(cleanData); // campos a guardar: name, userName, email, password, rol, image

      res
        .status(201)
        .json({ success: true, message: "user created successfully" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      if (!dataValid.allValuesNotEmpty(req.body)) {
        throw new CustomError(400, "Uno o mas campos están vacíos");
      }
      const cleanData = dataTrans.removeSpacesFromObjectValues(req.body);
      const user = await User.findOne({ userName: cleanData.userName });
      console.log(req.body);
      if (!user || !(await bcrypt.compare(cleanData.password, user.password))) {
        throw new CustomError(400, "Invalid credentials");
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
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      if (!dataValid.isIdMongoose(req.params.id)) {
        throw new CustomError(400, "Id not found or invalid");
      }
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) {
        throw new CustomError(400, "User not found");
      }
      const userJson = user.toJSON();
      res.status(200).json({ user: userJson });
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length === 0) {
        throw new CustomError(404, "No users found");
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  },
  putUserUpdate: async (req, res) => {
    try {
      const cleanData = dataTrans.removeSpacesFromObjectValues(req.body);
      const id = req.user.id;

      const updatedUser = await User.findByIdAndUpdate(id, cleanData, {
        new: true,
        runValidators: true, // Ejecuta las validaciones del esquema
        context: "query", // Aplica las validaciones al contexto de la consulta
      });

      res.status(200).json(updatedUser); // envia todos los campos de la coleccion User (ojo!!!)
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const IdUser = req.params.id;
      if (!IdUser) {
        throw new CustomError(400, "Id not found");
      }
      if (!(await User.findByIdAndDelete(IdUser))) {
        throw new CustomError(400, "User not found");
      }
      res.status(200).json({
        message: `User ${removedUser.userName} deleted successfully`,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
};
