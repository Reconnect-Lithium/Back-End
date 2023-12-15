const { User, Gallery, Occasion, Cafe, sequelize, Room } = require("../models");

class roomControllers {
  static async createEvent(req, res, next) {
    try {
      const userId = req.user.id;
      const { startTime, endTime, description, photo, eventName, CategoryId } =
        req.body;
      const cafeId = await Cafe.findOne({ UserId: userId });

      await Occasion.create({
        startTime,
        endTime,
        description,
        photo,
        eventName,
        CategoryId,
        CafeId: cafeId.id,
      });

      res.send({ message: `success add ${eventName} as new event` });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = roomControllers;
