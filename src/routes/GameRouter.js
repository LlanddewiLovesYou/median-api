const express = require("express");
const {
  createNewGame,
  getAllGames,
  updateGame,
} = require("../api/GameController");
const { authenticateToken } = require("../util/auth");

const GameRouter = express.Router();

GameRouter.post("/:userId", authenticateToken, createNewGame);
GameRouter.get("/:userId", getAllGames);
GameRouter.patch("/:gameId", authenticateToken, updateGame);

module.exports = GameRouter;
