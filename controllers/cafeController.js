const { User, Cafe } = require("../models");
const { convertToURI, getFileName } = require("../helpers/uploadUtils");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class cafeController {
  static async changePhoto(req, res, next) {
    try {
      if (!req.file) {
        throw { name: "noFile" };
      }
      let { id } = req.params;
      let cafe = await Cafe.findByPk(id);
      if (!cafe) {
        throw { name: "notFound", id };
      }
      let dataURI = convertToURI(req.file);
      let fileName = getFileName(req.file);
      let uploaded = await cloudinary.uploader.upload(dataURI, {
        public_id: fileName,
        folder: "reconnect",
      });
      await Cafe.update({ photo: uploaded.url }, { where: { id } });
      res.status(200).json({ message: "Image Article success to update" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = cafeController;
