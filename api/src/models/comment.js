const mongoose = require("mongoose");
const publication = require("./publication");

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
    maxlength: 2000,
  },
  publication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publication",
    require: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Comment", commentSchema);
