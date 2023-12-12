// npx sequelize-cli model:generate --name User --attributes email:string,password:string,bio:text,avatar:text,role:string
// npx sequelize-cli model:generate --name Cafe --attributes description:string,photo:text,location:geometry,name:string,address:text,UserId:number
// npx sequelize-cli model:generate --name Gallery --attributes imgUrl:text,cafeId:number
// npx sequelize-cli model:generate --name Occasion --attributes startTime:date,endTime:date,description:text,photo:text,eventName:string,CategoryId:number,CafeId:number
// npx sequelize-cli model:generate --name Category --attributes name:string,thumbnail:text
// npx sequelize-cli model:generate --name Room --attributes OccasionId:number,UserId:number
// npx sequelize-cli model:generate --name Message --attributes time:date,message:text,RoomId:number,UserId:number

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const authController = require("./controllers/authController");

const authentication = require("./middlewares/authentication");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RECONNECT SERVER IS RUNNING");
});

app.post("/login", authController.login);
app.post("/register/user", authController.registerUser);
app.post("/register/owner", authController.registerOwner);





app.use(errorHandler);
module.exports = app;