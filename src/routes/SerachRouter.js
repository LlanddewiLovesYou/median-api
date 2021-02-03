const express = require("express");
const { search } = require("../api/SearchController");

const SearchRouter = express.Router();

SearchRouter.get("/", search);

module.exports = { SearchRouter };
