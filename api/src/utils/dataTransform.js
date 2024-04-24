module.exports = {
  removeSpacesFromObjectValues: (obj) => {
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key].trim();
      }
    }
    return newObj;
  },
};
