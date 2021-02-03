const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const User = require("./user");
const Game = require("./game");
const Entry = require("./entry");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, Game, Entry };

module.exports = { connectDb, models };
