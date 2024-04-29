const express = require("express");
const commentController = require("../controllers/comment");
const middle = require("../middleware/validation");
const router = express.Router();

router.get("/", middle.verifyToken, commentController.getComments);
router.get("/:id", middle.verifyToken, commentController.getCommnetById);
router.post(
  "/create-comment",
  middle.verifyToken,
  middle.commentValidation,
  commentController.postCreateComment
);
router.put(
  "/update-comment",
  middle.verifyToken,
  commentController.putUpdateComment
);
router.delete(
  "/delete-comment",
  middle.verifyToken,
  commentController.deleteCommentById
);
router.put("/likes", middle.verifyToken, commentController.putToggleLike);

module.exports = router;
