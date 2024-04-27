const express = require("express");
const postController = require("../controllers/publication");
const middle = require("../middleware/validation");
const router = express.Router();

router.get("/", middle.verifyToken, postController.getPosts);
router.get("/:id", middle.verifyToken, postController.getPostById);
router.post(
  "/create-post",
  middle.verifyToken,
  middle.PostValidation,
  postController.postCreatePost
);
router.put("/update-post", middle.verifyToken, postController.putUpdatePost);
router.delete(
  "/delete-post",
  middle.verifyToken,
  postController.deletePostsById
);

module.exports = router;
