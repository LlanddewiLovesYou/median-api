const {
  addNewEntryToDb,
  getAllEntriesByUserName,
  updateEntryData,
  deleteEntryById,
} = require("../services/EntryService");

const createNewGameEntry = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const gameId = req.query.gameId;
    const entryData = req.body;
    entryData.userId = userId;
    entryData.gameId = gameId;
    const entry = await addNewEntryToDb(entryData);
    res.send(entry);
  } catch (e) {
    console.log(e);
  }
};

const getAllGameEntries = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const entries = await getAllEntriesByUserName(userId);
    res.send(entries);
  } catch (e) {
    console.log(e);
  }
};

const updateGameEntry = async (req, res, next) => {
  try {
    const entryId = req.params.entryId;
    const patch = req.body;
    patch.lastPlayed = new Date(Date.now()).toDateString();
    const updatedEntry = await updateEntryData(entryId, patch);
    res.send(updatedEntry);
  } catch (e) {
    console.log(e);
  }
};

const deleteGameEntry = async (req, res, next) => {
  try {
    const entryId = req.params.entryId;
    const [deletedEntry] = await deleteEntryById(entryId);
    res.send(deletedEntry);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  createNewGameEntry,
  getAllGameEntries,
  updateGameEntry,
  deleteGameEntry,
};
