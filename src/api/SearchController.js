const { SearchDbWithQuery } = require("../services/SearchService");

const search = async (req, res, next) => {
  try {
    const query = req.query.q;
    const searchResults = await SearchDbWithQuery(query);
    res.send(searchResults);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { search };
