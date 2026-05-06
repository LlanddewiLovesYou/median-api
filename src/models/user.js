const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sub: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    given_name: {
      type: String,
      required: true,
    },
    family_name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    email_verified: {
      type: Boolean,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);

module.exports = User;
