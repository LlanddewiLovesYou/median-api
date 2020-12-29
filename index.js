const express = require("express");
const cors = require("cors");
const PostRouter = require("./src/routes/PostRouter");
const UserRouter = require("./src/routes/UserRouter");
const ClapRouter = require("./src/routes/ClapRouter");
const CommentRouter = require("./src/routes/CommentRouter");
const { connectDb, models } = require("./src/models");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", PostRouter);
app.use("/users", UserRouter);
app.use("/claps", ClapRouter);
app.use("/comments", CommentRouter);

connectDb().then(() => {
  app.listen(port, () =>
    console.log(`MEDIAN-API is listening on port ${port}`)
  );
});
