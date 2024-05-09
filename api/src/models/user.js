const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email",
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
  rol: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  image: {
    type: String,
    require: true,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(url);
      },
      message: (invalidURL) =>
        `${invalidURL.value} no es una URL de imagen válida`,
    },
  },
  publications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publication",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
