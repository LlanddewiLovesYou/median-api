const { Router } = require("express");
const { getAllPosts } = require("../api/posts");

const PostRouter = Router();

PostRouter.get("/posts", () => console.log("hit route"));

module.exports = PostRouter;
