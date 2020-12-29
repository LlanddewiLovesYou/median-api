const express = require("express");
const {
  getCommentsForPost,
  createCommentOnPost,
  deleteCommentfromPost,
} = require("../api/CommentController");

const CommentRouter = express.Router();

CommentRouter.post("/:id", createCommentOnPost);
CommentRouter.get("/:id", getCommentsForPost);
// CommentRouter.delete("/:id", deleteCommentfromPost);

module.exports = CommentRouter;
