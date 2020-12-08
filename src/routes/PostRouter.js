const express = require("express");
const { getAllPosts } = require("../api/PostController");

const PostRouter = express.Router();

PostRouter.get("/", getAllPosts);

module.exports = PostRouter;
