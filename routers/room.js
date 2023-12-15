const express = require("express");
const router = express.Router();
const roomControllers = require("../controllers/roomControllers");

router.post("/create-event", roomControllers.createEvent);
// router.get("/create-room", roomControllers.createRoom);

module.exports = router;
