const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const postRouter = require("./publication");
const commentRouter = require("./comment");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

module.exports = router;
