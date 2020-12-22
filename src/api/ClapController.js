const Post = require("../models/post");
const { updatePostById } = require("../services/PostService");

const incrementClaps = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const posts = await Post.find({ id: postId });
    const post = posts[0];
    const claps = post.claps;
    const updatedPost = await updatePostById(postId, { claps: claps + 1 });
    res.send(updatedPost);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { incrementClaps };
