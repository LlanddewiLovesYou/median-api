const express = require("express");
const cors = require("cors");
const UserRouter = require("./src/routes/UserRouter");
const GameRouter = require("./src/routes/GameRouter");
const { errorHandler } = require("./src/middleware/errorHandler");
const { connectDb, models } = require("./src/models");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserRouter);
app.use("/games", GameRouter);
// app.use(errorHandler);

connectDb().then(() => {
  app.listen(port, () =>
    console.log(`GAMEKEEPER-API is listening on port ${port}`)
  );
});
