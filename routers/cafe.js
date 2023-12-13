const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.patch(
  "/change-photo/:id",
  upload.single("imgUrl"),
  cafeController.changePhoto
);

module.exports = router;
