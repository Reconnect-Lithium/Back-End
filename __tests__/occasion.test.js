const request = require("supertest");
const getToken = require("../helpers/getToken");
const app = require("../app");
const fs = require("fs");
const { User, Cafe, Category, Occasion, Room, Gallery } = require("../models");
let filePath = `${__dirname}\\testFiles\\foto-toko.jpg`;
const imageBuffer = fs.readFileSync(filePath); // Buffer

let ownerToken;
let userToken;
beforeAll(async () => {
  // create user
  let user = {
    email: "user1@mail.com",
    password: "user1",
    username: "user1",
    role: "user",
  };
  await User.create(user);
  userToken = await getToken("user1@mail.com", "user1");
  // create owner
  let data = {
    email: "owner1@mail.com",
    password: "owner1",
    username: "owner1",
    role: "owner",
  };
  data = await User.create(data);
  ownerToken = await getToken("owner1@mail.com", "owner1");
  // create cafe
  let point = { type: "Point", coordinates: [106.805534, -6.272444] };
  let cafe = {
    location: point,
    name: "cafe hacktiv",
    address: "hacktiv 8",
    UserId: data.id,
  };
  await Cafe.create(cafe);
  // create category
  let category = {
    name: "music",
  };
  await Category.create(category);
  // create occasion
  let occasion = {
    startTime: new Date(),
    endTime: new Date(),
    description: "asdasd",
    eventName: "event1",
    CategoryId: 1,
    CafeId: 1,
  };
  await Occasion.create(occasion);

  // create room
  let room = {
    EventId: 1,
    UserId: 1,
  };
  await Room.create(room);
});
afterAll(async () => {
  await User.destroy({ truncate: true, restartIdentity: true, cascade: true });
  await Cafe.destroy({ truncate: true, restartIdentity: true, cascade: true });
  await Category.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
  await Occasion.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
  await Room.destroy({ truncate: true, restartIdentity: true, cascade: true });
});

describe.only("POST /occasion", () => {
  test("Create event success", async () => {
    let filename = new Date() + "foto-toko.jpg";
    const response = await request(app)
      .post("/occasion")
      .set("Authorization", ownerToken)
      .attach("photo", imageBuffer, filename)
      .field("startTime", "2023-12-16T04:43:33.437Z")
      .field("endTime", "2023-12-16T05:43:33.437Z")
      .field("description", "test1")
      .field("eventName", "test1")
      .field("CategoryId", 1);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });
  test("Create event fail when CategoryId not provided", async () => {
    let filename = new Date() + "foto-toko.jpg";
    const response = await request(app)
      .post("/occasion")
      .set("Authorization", ownerToken)
      .attach("photo", imageBuffer, filename)
      .field("startTime", "2023-12-16T04:43:33.437Z")
      .field("endTime", "2023-12-16T05:43:33.437Z")
      .field("description", "test1")
      .field("eventName", "test1");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });
  test("Create event fail when photo file not provided", async () => {
    let filename = new Date() + "foto-toko.jpg";
    const response = await request(app)
      .post("/occasion")
      .set("Authorization", ownerToken)
      .field("startTime", "2023-12-16T04:43:33.437Z")
      .field("endTime", "2023-12-16T05:43:33.437Z")
      .field("description", "test1")
      .field("eventName", "test1");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });
  test("Create event fail when owner not login", async () => {
    let filename = new Date() + "foto-toko.jpg";
    const response = await request(app)
      .post("/occasion")
      .attach("photo", imageBuffer, filename)
      .field("startTime", "2023-12-16T04:43:33.437Z")
      .field("endTime", "2023-12-16T05:43:33.437Z")
      .field("description", "test1")
      .field("eventName", "test1")
      .field("CategoryId", 1);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });
  test("Create event fail when user try create event", async () => {
    let filename = new Date() + "foto-toko.jpg";
    const response = await request(app)
      .post("/occasion")
      .set("Authorization", userToken)
      .attach("photo", imageBuffer, filename)
      .field("startTime", "2023-12-16T04:43:33.437Z")
      .field("endTime", "2023-12-16T05:43:33.437Z")
      .field("description", "test1")
      .field("eventName", "test1")
      .field("CategoryId", 1);

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });
});
