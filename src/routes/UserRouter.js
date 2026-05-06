const express = require("express");
const {
  loginUser,
  getUsers,
  getSpecificUser,
  destroyUser,
  validateAccessToken,
  createUser,
} = require("../api/UserController");
const { authenticateToken } = require("../util/auth");
const { checkPermissions } = require("../util/permissions");

const UserRouter = express.Router();

UserRouter.post("/", authenticateToken, createUser);
UserRouter.post("/validate", validateAccessToken);
UserRouter.get("/", authenticateToken, checkPermissions("admin"), getUsers);
UserRouter.get("/:sub", authenticateToken, getSpecificUser);
UserRouter.delete(
  "/:username",
  authenticateToken,
  checkPermissions("admin"),
  destroyUser,
);

module.exports = UserRouter;
