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
  // create event
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

  // join room?
  static async joinRoom(req, res, next) {
    try {
      const { id } = req.params;

      const occasion = await Occasion.findByPk(id);
      res.send(occasion);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  //   create msg
  static async createMsg(req, res, next) {
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

  // list event
  static async listEvent(req, res, next) {
    try {
      const listEvent = await Occasion.findAll();
      // console.log(listEvent);

      res.send(listEvent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  // listMessage
  static async listMessage(req, res, next) {
    try {
      const { OccasionId } = req.params;

      const roomMsg = await Message.findAll({
        wehre: {
          OccasionId: OccasionId,
        },
        order: [["createdAt", "DESC"]],
      });

      res.send(roomMsg);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = roomControllers;
