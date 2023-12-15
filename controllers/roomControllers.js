const {
  User,
  Gallery,
  Occasion,
  Cafe,
  sequelize,
  Room,
  Message,
} = require("../models");

class roomControllers {
  static async createEvent(req, res, next) {
    try {
      const userId = req.user.id;
      const { startTime, endTime, description, photo, eventName, CategoryId } =
        req.body;
      const cafeId = await Cafe.findOne({ UserId: userId });

      // create event
      const eventId = await Occasion.create({
        startTime,
        endTime,
        description,
        photo,
        eventName,
        CategoryId,
        CafeId: cafeId.id,
      });

      // create roooms
      await Room.create({
        OccasionId: eventId.id,
        UserId: userId,
      });

      res.send({ message: `success add ${eventName} as new event` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  //   joinRoom
  static async joinRoom(req, res, next) {
    try {
      const userId = req.user.id;
      const { roomId } = req.params;
      const { message } = req.body;
      //   console.log(roomId, userId, message);

      const newMessage = await Message.create({
        RoomId: roomId,
        UserId: userId,
        message: message,
        time: Date.now(),
      });
      //   console.log(message);

      res.send(newMessage);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = roomControllers;
