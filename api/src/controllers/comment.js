const Comment = require("../models/comment");
const Publication = require("../models/publication");
const dataTransform = require("../utils/dataTransform");
const CustomError = require("../utils/handlerErrors");
const { isIdMongoose } = require("../utils/validation");
module.exports = {
  getComments: async (req, res) => {
    try {
      const newLIstComment = await Comment.find();
      if (newLIstComment.length === 0) {
        throw new CustomError(400, "No comments found");
      }
      res.status(200).json(newLIstComment);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  getCommnetById: async (req, res) => {
    try {
      if (!isIdMongoose(req.params.id)) {
        throw new CustomError(400, "Id not found or invalid");
      }
      const foundComment = await Comment.findById(req.params.id);
      if (!foundComment) {
        throw new CustomError(400, "No comment found");
      }
      res.status(200).json(foundComment);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  postCreateComment: async (req, res) => {
    try {
      req.body.author = req.user.id;
      console.log(req.body);
      const newComment = await Comment.create(req.body);
      console.log(newComment);
      const updatePublication = await Publication.findByIdAndUpdate(
        req.body.publication,
        { $push: { comment: newComment._id } },
        { new: true }
      );
      res.status(200).json({
        message: "The comment was created successfully",
        newComment,
        updatePublication,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  putUpdateComment: async (req, res) => {
    try {
      const cleanData = dataTransform.removeSpacesFromObjectValues(req.body);
      const id = req.user.id;
      if (id !== cleanData.author) {
        throw new CustomError(
          403,
          "You are not authorized to modify this comment."
        );
      }
      const updateComment = await Comment.findByIdAndUpdate(
        cleanData._id,
        cleanData,
        { new: true, runValidators: true, context: "query" }
      );
      if (!updateComment) {
        throw new CustomError(400, "No comment found");
      }
      res.status(200).json({
        message: "the Publication is successfully modified",
        updateComment,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      const id = req.user.id;
      const comment = req.body;
      console.log(id);
      console.log(comment.author);
      if (id !== comment.author) {
        throw new CustomError(
          403,
          "You are not authorized to modify this comment."
        );
      }
      await Publication.findByIdAndUpdate(comment.publication, {
        $pull: { comment: comment.id },
      });

      if (!(await Comment.findByIdAndDelete(comment.id))) {
        throw new CustomError(400, "Comment not found");
      }
      res
        .status(200)
        .json({ message: "The comment was successfully deleted." });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  putToggleLike: async (req, res) => {
    try {
      console.log(req.body.comment);
      const newToggleLike = await dataTransform.toggleLike(
        Comment,
        req.body.comment,
        req.user.id
      );

      res.status(200).json(newToggleLike);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
};
