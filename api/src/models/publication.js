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
    require: true,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(url);
      },
      message: (invalidURL) =>
        `${invalidURL.value} no es una URL de imagen válida`,
    },
  },
  theme: {
    type: String,
    require: true,
    enum: ["MERN", "MongoDB", "Express", "React", "Node"],
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
