const express = require("express");
const { authenticateToken } = require("../util/auth");
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
PostRouter.post("/", authenticateToken, createPost);
PostRouter.patch("/:id", authenticateToken, updatePost);
PostRouter.delete("/:id", authenticateToken, deletePost);

module.exports = PostRouter;
