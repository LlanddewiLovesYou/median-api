const mongoose = require("mongoose");

// import User from "./user";
const Post = require("./post");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

const models = { Post };

module.exports = { connectDb, models };
