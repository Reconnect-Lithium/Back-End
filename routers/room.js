const express = require("express");
const router = express.Router();
const roomControllers = require("../controllers/roomControllers");

router.get("/", roomControllers.listEvent);
router.post("/create-event", roomControllers.createEvent);
router.post("/:roomId", roomControllers.joinRoom);
router.get("/list-message/:id", roomControllers.listMessage);

module.exports = router;
