const User = require("../models/user");
const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { authenticateUser } = require("../util/auth");
const {
  getAccessToken,
  getAllUsers,
  getUserByUsername,
  deleteUserByUsername,
  validateJwt,
} = require("../services/UserService");

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const encryptedPassword = await Bcrypt.hash(data.password, 10);
    const user = await User.create({
      userName: data.userName,
      password: encryptedPassword,
      permissions: data.permissions || "read-only",
    });
    res.status(201).send(user);
  } catch (e) {
    console.log(e.message);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const currentUser = await getUserByUsername(userData.userName);
    const authenticated = await authenticateUser(userData, currentUser);
    if (authenticated) {
      const accessToken = await getAccessToken(currentUser.toJSON());
      res.send({ accessToken, currentUser });
    } else {
      res.status(401).send();
    }
  } catch (e) {
    res.status(500).send();
    console.log(e);
  }
};

const validateAccessToken = async (req, res, next) => {
  try {
    const token = req.body.accessToken;
    const validation = await validateJwt(token);

    if (validation.valid) {
      res.send(validation.currentUser);
    } else {
      res.sendStatus(403);
    }
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (e) {
    console.log(e);
  }
};

const getSpecificUser = async (req, res, next) => {
  try {
    const userName = req.params.username;
    const user = await getUserByUsername(userName);
    res.send(user);
  } catch (e) {
    console.log(e);
  }
};

const destroyUser = async (req, res, next) => {
  try {
    const userName = req.params.username;
    const user = await deleteUserByUsername(userName);
    res.send(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getSpecificUser,
  destroyUser,
  validateAccessToken,
};
