const express = require("express");
const cors = require("cors");
const PostRouter = require("./src/routes/PostRouter");
const UserRouter = require("./src/routes/UserRouter");
const { connectDb, models } = require("./src/models");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", PostRouter);
app.use("/users", UserRouter);

connectDb().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`MEDIAN-API is listening on port ${process.env.PORT}`)
  );
});
