const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxlength: 100,
  },
  content: {
    type: String,
    require: true,
    maxlength: 5000,
  },
  image: {
    type: String,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(url);
      },
      message: (invalidURL) =>
        `${invalidURL.value} no es una URL de imagen válida`,
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Publication", publicationSchema);
