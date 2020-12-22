const Post = require("../models/post");

const createNewPost = async (data) => {
  data.readTime = Math.ceil(data.wordCount / 200);
  try {
    const post = await Post.create(data);
    console.log("post created!");
    return post;
  } catch (e) {
    console.log(e);
  }
};

const getAllPostsFromDB = async (data) => {
  try {
    const posts = await Post.find().sort({ createdAt: "desc" });
    return posts;
  } catch (e) {
    console.log(e);
  }
};

const deletePostById = async (id) => {
  try {
    const posts = await Post.find({ id });
    const deletedPosts = await Post.deleteMany({ id });
    return posts;
  } catch (e) {
    console.log(e);
  }
};

const getPostById = async (id) => {
  try {
    const post = await Post.find({ id });
    return post;
  } catch (e) {
    console.log(e);
  }
};

const updatePostById = async (id, body) => {
  try {
    let post = await Post.update({ id }, { $set: body });
    const updatedPost = await Post.find({ id });
    return updatedPost;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createNewPost,
  getAllPostsFromDB,
  deletePostById,
  getPostById,
  updatePostById,
};
