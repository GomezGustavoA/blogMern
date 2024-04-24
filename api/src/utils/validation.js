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
};
