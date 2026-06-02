const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
const { v4: UUID } = require("uuid");

const createComment = async (postId, commentData) => {
  try {
    const post = await Post.findOne({ id: postId });
    const user = await User.findOne({ sub: commentData.sub });
    const comment = await Comment.create({
      id: UUID(),
      user: {
        userName: user.name,
        sub: user.sub,
        picture: user.picture,
      },
      text: commentData.text,
      postId: post.id,
    });

    if (post.comments) {
      await Post.updateOne(
        { id: post.id },
        { comments: [...post.comments, comment.id] },
      );
    } else {
      await Post.updateOne({ id: post.id }, { comments: [comment.id] });
    }
    return comment;
  } catch (e) {
    console.log(e);
  }
};

const getCommentsByPostId = async (postId) => {
  try {
    const post = await Post.findOne({ id: postId });
    const comments =
      (await Comment.find({ postId: post.id }).sort({
        createdAt: "desc",
      })) || [];
    return comments;
  } catch (e) {
    console.log(e);
  }
};

const deleteCommentById = async (commentId) => {
  try {
    const comment = await Comment.findOne({ id: commentId });
    const deletedComment = await Comment.deleteOne({ id: commentId });
    const post = await Post.findOne({ id: comment.postId });
    const updatedCommentsOnPost = post.comments.filter(
      (id) => id !== commentId,
    );
    await Post.updateOne({ id: post.id }, { comments: updatedCommentsOnPost });

    const remainingComments = (await Comment.find({ postId: post.id }))
      .filter((comment) => comment.id !== commentId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return remainingComments;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createComment, getCommentsByPostId, deleteCommentById };
