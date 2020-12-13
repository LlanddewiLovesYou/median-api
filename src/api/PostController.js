const {
  createNewPost,
  getAllPostsFromDB,
  deletePostById,
  getPostById,
  updatePostById,
} = require("../services/PostService");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await getAllPostsFromDB(req.body);
    res.send(posts);
  } catch (e) {
    console.log(e);
    res.send(e.fullMessages);
  }
};

const createPost = async (req, res, next) => {
  try {
    const data = req.body;
    const newPost = await createNewPost(data);
    res.send(newPost);
  } catch (e) {
    res.status(400);
    res.send(e.fullMessages);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const deletedPost = await deletePostById(req.params.id);
    res.send(deletedPost);
  } catch (e) {
    res.status(400);
    res.send(e.fullMessages);
  }
};

const getPost = async (req, res, next) => {
  try {
    const post = await getPostById(req.params.id);
    res.send(post);
  } catch (e) {
    res.status(400);
    res.send(e.fullMessages);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const body = req.body;
    const post = await updatePostById(req.params.id, body);
    res.send(post);
  } catch (e) {
    res.status(400);
    res.send(e.fullMessages);
  }
};

module.exports = { getAllPosts, createPost, deletePost, getPost, updatePost };
