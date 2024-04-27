const mongoose = require("mongoose");
module.exports = {
  allValuesNotEmpty: (obj) => {
    return Object.values(obj).every((value) => value.trim() !== "");
  },
  validEmail: (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validImage: (image) => {
    return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(image);
  },
  validateTitleLength: (title) => {
    return title.length <= 100;
  },
  validateContentLength: (content) => {
    return content.length <= 5000;
  },
  isIdMongoose: (id) => {
    return typeof id === "string" && mongoose.Types.ObjectId.isValid(id);
  },
};
