const express = require("express");
const cors = require("cors");
const PostRouter = require("./src/routes/PostRouter");
const { connectDb, models } = require("./src/models");
const PostController = require("./src/api/posts");

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

app.use(PostRouter);

app.post("/posts", async (req, res, next) => {
  const post = await req.context.models.post.create(req.body);
  res.send(post);
});

app.get("/posts", PostController.getAllPosts);

connectDb().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`app is listening on port ${process.env.PORT}`)
  );
});
