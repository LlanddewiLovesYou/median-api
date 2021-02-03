const User = require("../models/user");
const Game = require("../models/game");

const SearchDbWithQuery = async (query) => {
  const $regex = new RegExp(query, "i", "g");
  const userResults = await User.find({
    userName: { $regex },
  });
  const gameResults = await Game.find({
    title: { $regex },
  });
  return { userResults, gameResults };
};

module.exports = { SearchDbWithQuery };
