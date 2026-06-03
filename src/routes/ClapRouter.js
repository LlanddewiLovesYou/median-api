const express = require("express");
const {
  incrementClaps,
  incrementCommentClaps,
} = require("../api/ClapController");

const ClapRouter = express.Router();

ClapRouter.post("/:id", incrementClaps);
ClapRouter.post("/comment/:id", incrementCommentClaps);

module.exports = ClapRouter;
