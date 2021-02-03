const express = require("express");
const {
  createNewGameEntry,
  getAllGameEntries,
  updateGameEntry,
  deleteGameEntry,
} = require("../api/EntryController");
const { authenticateToken } = require("../util/auth");

const EntryRouter = express.Router();

EntryRouter.post("/:userId", authenticateToken, createNewGameEntry);
EntryRouter.get("/:userId", getAllGameEntries);
EntryRouter.patch("/:entryId", authenticateToken, updateGameEntry);
EntryRouter.delete("/:entryId", authenticateToken, deleteGameEntry);

module.exports = EntryRouter;
