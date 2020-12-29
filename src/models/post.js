const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    claps: {
      type: Number,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

// export interface Post {
//     id: string;
//     title: string;
//     subtitle: string;
//     body: string;
//     claps?: number;
//     createdAt: Date;
//     updatedAt: Date;
//     readTime?: number;
//     author: string;
//     imageUrl: string;
//   }
