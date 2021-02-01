const Game = require("../models/game");
const User = require("../models/user");

const addNewGameToDb = async (body) => {
  try {
    const game = await Game.create(body);
    return game;
  } catch (e) {
    console.log(e);
  }
};

const getAllGamesByUserName = async (userId) => {
  try {
    const games = await Game.find({ userId }).sort({
      lastPlayed: "desc",
      updatedAt: "desc",
    });
    const user = await User.find({ _id: userId });
    return { games, user };
  } catch (e) {
    console.log(e);
  }
};

const updateGameData = async (gameId, patch) => {
  try {
    await Game.updateOne({ _id: gameId }, { $set: patch });
    const [updatedGame] = await Game.find({ _id: gameId });
    return updatedGame;
  } catch (e) {
    console.log(e);
  }
};

const deleteGameById = async (gameId) => {
  try {
    const deletedGame = await Game.find({ _id: gameId });
    await Game.deleteOne({ _id: gameId });
    return deletedGame;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addNewGameToDb,
  getAllGamesByUserName,
  updateGameData,
  deleteGameById,
};
