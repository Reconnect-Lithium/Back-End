const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// patch bio
router.patch("/bio/:id", userController.changeBio);
// patch avatar
router.patch("/avatar/:id", userController.changeAvatar);
// patch username
router.patch("/username/:id", userController.changeUsername);

// get user by id
router.get("/:id", userController.getUserById);

module.exports = router;
