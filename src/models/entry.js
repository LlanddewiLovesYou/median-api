const mongoose = require("mongoose");
const { stringify } = require("querystring");

const entrySchema = new mongoose.Schema(
  {
    gameId: {
      type: String,
    },
    userId: {
      type: String,
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
  },
  { timestamps: true }
);

const Entry = mongoose.model("entry", entrySchema);

module.exports = Entry;
