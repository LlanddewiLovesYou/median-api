const express = require("express");
const { authenticateToken } = require("../util/auth");
const { checkPermissions } = require("../util/permissions");
const {
  getAllPosts,
  createPost,
  deletePost,
  getPost,
  updatePost,
} = require("../api/PostController");

const PostRouter = express.Router();

PostRouter.get("/", getAllPosts);
PostRouter.get("/:id", getPost);
PostRouter.post("/", authenticateToken, checkPermissions("admin"), createPost);
PostRouter.patch(
  "/:id",
  authenticateToken,
  checkPermissions("admin"),
  updatePost
);
PostRouter.delete(
  "/:id",
  authenticateToken,
  checkPermissions("admin"),
  deletePost
);

module.exports = PostRouter;
