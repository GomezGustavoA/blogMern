const mongoose = require("mongoose");
module.exports = {
  allValuesNotEmpty: (obj) => {
    console.log(obj);
    return Object.values(obj).every((value) => value.trim() !== "");
  },
  validEmail: (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validImage: (image) => {
    return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(image);
  },
  validateContentLength: (content, value) => {
    return content.length <= value;
  },
  isIdMongoose: (id) => {
    return typeof id === "string" && mongoose.Types.ObjectId.isValid(id);
  },
};
