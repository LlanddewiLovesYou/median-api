const mongoose = require("mongoose");
const { stringify } = require("querystring");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
    },
    platform: {
      type: String,
    },
    rogueLike: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("game", gameSchema);

module.exports = Game;
