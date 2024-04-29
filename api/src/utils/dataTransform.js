const CustomError = require("./handlerErrors");

CustomError;
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
  toggleLike: async (Model, id, userId) => {
    let newToggleLike;
    const document = await Model.findById(id);

    if (!document) {
      throw new CustomError(400, "No document found");
    }

    document.likes.includes(userId)
      ? (newToggleLike = await Model.findByIdAndUpdate(
          id,
          { $pull: { likes: userId } },
          { new: true }
        ))
      : (newToggleLike = await Model.findByIdAndUpdate(
          id,
          { $push: { likes: { $each: [userId], $position: 0 } } },
          { new: true }
        ));

    return newToggleLike;
  },
};
