const mongoose = require("mongoose");

const Post = require("./post");
const User = require("./user");
const Comment = require("./comment");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
};

const models = { Post, User, Comment };

module.exports = { connectDb, models };
