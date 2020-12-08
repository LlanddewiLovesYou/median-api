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
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewPost, getAllPostsFromDB };
