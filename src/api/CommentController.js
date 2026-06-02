const {
  createComment,
  getCommentsByPostId,
  deleteCommentById,
} = require("../services/CommentService");

const createCommentOnPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const commentData = req.body;
    const comment = await createComment(postId, commentData);
    res.send(comment);
  } catch (e) {
    console.log(e);
    res.send(500);
  }
};

const getCommentsForPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const comments = await getCommentsByPostId(postId);
    res.send(comments);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const deleteCommentfromPost = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const deletedComment = await deleteCommentById(commentId);
    res.send(deletedComment);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  createCommentOnPost,
  getCommentsForPost,
  deleteCommentfromPost,
};
