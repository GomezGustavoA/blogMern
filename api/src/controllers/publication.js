const Publication = require("../models/publication");
const User = require("../models/user");
const dataTransform = require("../utils/dataTransform");
const CustomError = require("../utils/handlerErrors");
const { isIdMongoose } = require("../utils/validation");

module.exports = {
  getPosts: async (req, res) => {
    try {
      const newListPost = await Publication.find();
      if (newListPost.length === 0) {
        throw new CustomError(400, "No publications found");
      }
      res.status(200).json(newListPost);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  getPostById: async (req, res) => {
    try {
      if (!isIdMongoose(req.params.id)) {
        throw new CustomError(400, "Id not found or invalid");
      }
      const foundPost = await Publication.findById(req.params.id);
      if (!foundPost) {
        throw new CustomError(400, "No publication found");
      }
      res.status(200).json(foundPost);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  postCreatePost: async (req, res) => {
    try {
      req.body.author = req.user.id;
      const newPost = await Publication.create(req.body);
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { $push: { publications: newPost._id } },
        { new: true }
      );
      res.status(200).json({
        message: "The publication was created successfully",
        newPost,
        updatedUser,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  putUpdatePost: async (req, res) => {
    try {
      const cleanData = dataTransform.removeSpacesFromObjectValues(req.body);
      const id = req.user.id;

      if (id !== cleanData.author) {
        throw new CustomError(
          403,
          "You are not authorized to modify this publication."
        );
      }
      const updatePost = await Publication.findByIdAndUpdate(
        cleanData._id,
        cleanData,
        {
          new: true,
          runValidators: true,
          context: "query",
        }
      );
      if (!updatePost) {
        throw new CustomError(400, "No publication found");
      }
      res.status(200).json({
        message: "the publication is successfully modified",
        updatePost,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  deletePostsById: async (req, res) => {
    try {
      const id = req.user.id;
      const post = req.body;
      if (id !== post.author) {
        throw new CustomError(
          403,
          "You are not authorized to modify this publication."
        );
      }
      if (!(await Publication.findByIdAndDelete(post.id))) {
        throw new CustomError(400, "Post not found");
      }
      await User.findByIdAndUpdate(post.author, {
        $pull: { publications: post.id },
      });

      res
        .status(200)
        .json({ message: "The publication was successfully deleted." });
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
  putToggleLike: async (req, res) => {
    try {
      const newToggleLike = await dataTransform.toggleLike(
        Publication,
        req.body.publication,
        req.user.id
      );

      res.status(200).json(newToggleLike);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  },
};
