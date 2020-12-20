const express = require("express");
const {
  createUser,
  loginUser,
  getUsers,
  getSpecificUser,
  destroyUser,
  validateAccessToken,
} = require("../api/UserController");
const { authenticateToken } = require("../util/auth");
const { checkPermissions } = require("../util/permissions");

const UserRouter = express.Router();

UserRouter.post("/", createUser);
UserRouter.post("/login", loginUser);
UserRouter.post("/validate", validateAccessToken);
UserRouter.get("/", authenticateToken, checkPermissions("admin"), getUsers);
UserRouter.get(
  "/:username",
  authenticateToken,
  checkPermissions("admin"),
  getSpecificUser
);
UserRouter.delete(
  "/:username",
  authenticateToken,
  checkPermissions("admin"),
  destroyUser
);

module.exports = UserRouter;
