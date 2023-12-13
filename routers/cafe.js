const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

const multer = require("multer");
const onlyOwner = require("../middlewares/authorization");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.patch(
  "/change-photo/:id",
  onlyOwner,
  upload.single("photo"),
  cafeController.changePhoto
);
// get cafe by user location (pake query params)
// patch description
// patch location
// patch name
// patch address

// post gallery
// delete gallery
module.exports = router;
