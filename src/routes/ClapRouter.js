const express = require("express");
const { incrementClaps } = require("../api/ClapController");

const ClapRouter = express.Router();

ClapRouter.post("/:id", incrementClaps);

module.exports = ClapRouter;
