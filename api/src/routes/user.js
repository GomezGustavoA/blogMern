const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const middle = require("../middleware/validation");

router.post("/auth/signup", middle.userValidation, userController.createUser);
router.post("/auth/signin", userController.loginUser);
router.get("/auth/signin-force", middle.verifyToken, userController.loginForce);

router.get("/:id", middle.verifyToken, userController.getUserById);
router.get(
  "/",
  middle.verifyToken,
  middle.rolValidation,
  userController.getUsers
);
router.put("/update-user", middle.verifyToken, userController.putUserUpdate);
router.delete(
  "/delete-user/:id",
  middle.verifyToken,
  middle.rolValidation,
  userController.deleteUserById
);
module.exports = router;
