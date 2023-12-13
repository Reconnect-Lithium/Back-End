const express = require("express");
const router = express.Router();
const auth = require("./auth");
const cafe = require('./cafe');
const user = require('./user');
const authentication = require("../middlewares/authentication");

router.get("/", (req, res) => {
  res.send("RECONNECT SERVER IS RUNNING");
});

router.use(auth);

// LOGIN FIRST
router.use(authentication);
router.use("/cafe", cafe);
router.use("/user", user);
// router.get("/logout", Controller.logout);

// router.use("/profile", profile);

module.exports = router;
