const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      userId: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
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
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
