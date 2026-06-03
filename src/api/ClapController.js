const Comment = require("../models/comment");
const Post = require("../models/post");
const { updatePostById } = require("../services/PostService");
const { updateCommentById } = require("../services/CommentService");

const incrementClaps = async (req, res) => {
  try {
    const postId = req.params.id;
    const posts = await Post.find({ id: postId });
    const post = posts[0];
    const updatedPost = await updatePostById(postId, { claps: post.claps + 1 });
    res.send(updatedPost);
  } catch (e) {
    console.log(e);
  }
};

const incrementCommentClaps = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comments = await Comment.find({ id: commentId });
    const comment = comments[0];
    const updatedComment = await updateCommentById(commentId, {
      claps: comment.claps + 1,
    });
    res.send(updatedComment);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { incrementClaps, incrementCommentClaps };
