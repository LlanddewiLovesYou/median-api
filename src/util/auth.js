const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = async (body) => {
  const users = await User.find({ userName: body.userName });
  const user = users[0];
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
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateUser, authenticateToken };
