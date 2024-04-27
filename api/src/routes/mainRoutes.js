const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const postRouter = require("./publication");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.get("/comment", (req, res) => res.send("ruta Comment"));

module.exports = router;
