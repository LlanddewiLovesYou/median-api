const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => UUID(),
    },
    user: {
      sub: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        required: false,
      },
    },

    text: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    claps: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
