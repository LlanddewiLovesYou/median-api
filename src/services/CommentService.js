const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");

const createComment = async (postId, commentData) => {
  try {
    const post = await Post.findOne({ id: postId });
    const user = await User.findOne({ _id: commentData.userId });
    const comment = await Comment.create({
      user: {
        userName: user.userName,
        userId: user._id,
      },
      text: commentData.text,
      postId: post._id,
    });
    if (post.comments) {
      await Post.updateOne(
        { _id: post._id },
        { comments: [...post.comments, comment._id] }
      );
    } else {
      await Post.updateOne({ _id: post._id }, { comments: [comment.id] });
    }
    return comment;
  } catch (e) {
    console.log(e);
  }
};

const getCommentsByPostId = async (postId) => {
  try {
    const post = await Post.findOne({ id: postId });
    console.log({ post });
    const comments = await Comment.find({ postId: post._id }).sort({
      createdAt: "desc",
    });
    return comments;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createComment, getCommentsByPostId };
