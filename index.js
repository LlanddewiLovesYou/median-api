const express = require("express");
const cors = require("cors");
const PostRouter = require("./src/routes/PostRouter");
const { connectDb, models } = require("./src/models");
const { getAllPosts, createPost } = require("./src/api/PostController");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/posts", PostRouter);

connectDb().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`app is listening on port ${process.env.PORT}`)
  );
});
