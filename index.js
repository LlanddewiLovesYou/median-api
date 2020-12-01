const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { getPosts } = require("./src/api/posts");
const { connectDb, models } = require("./src/models");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    //   me: models.users[1],
  };
  next();
});

app.post("/posts", async (req, res, next) => {
  const post = await req.context.models.post.create(req.body);
  res.send(post);
});

app.get("/posts", getPosts);

connectDb().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`app is listening on port ${process.env.PORT}`)
  );
});
