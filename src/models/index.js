const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const User = require("./user");
const Game = require("./game");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, Game };

module.exports = { connectDb, models };
