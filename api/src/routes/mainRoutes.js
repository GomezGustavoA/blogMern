const express = require("express");
const router = express.Router();
const userRouter = require("./user");

router.use("/users", userRouter);
router.get("/post", (req, res) => res.send("ruta Post"));
router.get("/comment", (req, res) => res.send("ruta Comment"));

module.exports = router;
