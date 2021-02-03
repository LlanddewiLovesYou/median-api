const Entry = require("../models/entry");
const Game = require("../models/game");
const User = require("../models/user");

const addNewEntryToDb = async (body) => {
  try {
    const initializedEntry = initializeEntry(body);
    if (body.game) {
      const game = await Game.create(body.game);
      initializedEntry.gameId = game._id;

      const entry = await Entry.create(initializedEntry);
      return { ...game._doc, ...entry._doc };
    } else if (body.gameId) {
      initializedEntry.gameId = body.gameId;
      const entry = await Entry.create(initializedEntry);
      return { entry };
    }
  } catch (e) {
    console.log(e);
  }
};

const initializeEntry = (body) => {
  const initializedEntry = {
    started: new Date(Date.now()).toDateString(),
    lastPlayed: new Date(Date.now()).toDateString(),
    hours: 0,
    completed: false,
    completedOn: "",
  };
  return { ...body, ...initializedEntry };
};

const getAllEntriesByUserName = async (userId) => {
  try {
    const entries = await Entry.find({ userId });
    const games = await Promise.all(
      entries.map(async (entry) => {
        const [game] = await Game.find({ _id: entry.gameId });
        console.log({ ...game._doc, ...entry._doc });
        return { ...game._doc, ...entry._doc };
      })
    );
    const [user] = await User.find({ _id: userId });
    return { games, user };
  } catch (e) {
    console.log(e);
  }
};

const updateEntryData = async (entryId, patch) => {
  try {
    await Entry.updateOne({ _id: entryId }, { $set: patch });
    const [updatedEntry] = await Entry.find({ _id: entryId });
    return updatedEntry;
  } catch (e) {
    console.log(e);
  }
};

const deleteEntryById = async (entryId) => {
  try {
    const deletedEntry = await Entry.find({ _id: entryId });
    await Entry.deleteOne({ _id: entryId });
    return deletedEntry;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addNewEntryToDb,
  getAllEntriesByUserName,
  updateEntryData,
  deleteEntryById,
};
