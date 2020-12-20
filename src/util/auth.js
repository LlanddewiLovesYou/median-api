const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const authenticateUser = async (body, user) => {
  if (user === null) {
    res.status(400).send("Cannot find user");
  }
  try {
    const authed = await Bcrypt.compare(body.password, user.password);
    return authed;
  } catch (e) {
    console.log(e);
  }
};

const authenticateToken = (req, res, next) => {
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401);
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateUser, authenticateToken };
