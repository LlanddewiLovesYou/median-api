const express = require("express");
const {
  createUser,
  loginUser,
  getUsers,
  getSpecificUser,
  destroyUser,
  validateAccessToken,
  befriendUser,
  unfriendUser,
  getFriends,
} = require("../api/UserController");
const User = require("../models/user");
const { authenticateToken } = require("../util/auth");
const { checkPermissions } = require("../util/permissions");

const UserRouter = express.Router();

// auth
UserRouter.post("/", createUser);
UserRouter.post("/login", loginUser);
UserRouter.post("/validate", validateAccessToken);

// util
UserRouter.get("/", authenticateToken, getUsers);
UserRouter.get("/:username", authenticateToken, getSpecificUser);
UserRouter.delete(
  "/:username",
  authenticateToken,
  checkPermissions("admin"),
  destroyUser
);

// friend
UserRouter.get("/friends/:userId", authenticateToken, getFriends);
UserRouter.patch("/friend/:friendId", authenticateToken, befriendUser);
UserRouter.patch("/unfriend/:friendId", authenticateToken, unfriendUser);

module.exports = UserRouter;
