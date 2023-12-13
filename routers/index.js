const express = require("express");
const router = express.Router();
const auth = require("./auth");
const cafe = require('./cafe');
const authentication = require("../middlewares/authentication");

router.get("/", (req, res) => {
  res.send("RECONNECT SERVER IS RUNNING");
});

router.use(auth);

// LOGIN FIRST
router.use(authentication);
router.use("/cafe", cafe);
// router.get("/logout", Controller.logout);

// router.use("/profile", profile);

module.exports = router;
