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
    started: {
      type: String,
    },
    lastPlayed: {
      type: String,
    },
    hours: {
      type: Number,
    },
    completed: {
      type: Boolean,
    },
    completedOn: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("game", gameSchema);

module.exports = Game;
