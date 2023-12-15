const express = require("express");
const router = express.Router();
const roomControllers = require("../controllers/roomControllers");

router.post("/:roomId", roomControllers.joinRoom);
router.post("/create-event", roomControllers.createEvent);

module.exports = router;
