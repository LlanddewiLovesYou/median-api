const {
  addNewGameToDb,
  getAllGamesByUserName,
  updateGameData,
} = require("../services/GameService");

const createNewGame = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const gameData = req.body;
    gameData.userId = userId;
    const game = await addNewGameToDb(gameData);
    res.send(game);
  } catch (e) {
    console.log(e);
  }
};

const getAllGames = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const games = await getAllGamesByUserName(userId);
    res.send(games);
  } catch (e) {
    console.log(e);
  }
};

const updateGame = async (req, res, next) => {
  try {
    const gameId = req.params.gameId;
    const patch = req.body;
    patch.lastPlayed = new Date(Date.now()).toDateString();
    const updatedGame = await updateGameData(gameId, patch);
    res.send(updatedGame);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewGame, getAllGames, updateGame };
