const express = require("express");
const {
  createUser,
  loginUser,
  getUsers,
  getSpecificUser,
  destroyUser,
} = require("../api/UserController");

const UserRouter = express.Router();

// UserRouter.get("/:userId", getUser);
UserRouter.post("/", createUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/", getUsers);
UserRouter.get("/:username", getSpecificUser);
UserRouter.delete("/:username", destroyUser);

module.exports = UserRouter;
