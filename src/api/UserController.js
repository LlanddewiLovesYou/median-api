const {
  getAllUsers,
  deleteUserByUsername,
  validateJwt,
  createNewUser,
  // getUserByGoogleSub,
} = require("../services/UserService");
const jwtDecode = require("jwt-decode");
require("dotenv").config();

const { getUserByGoogleUserId } = require("../services/OAuthService");

const createUser = async (req, res) => {
  try {
    const userData = req.headers["authorization"]
      ? jwtDecode(req.headers["authorization"].split(" ")[1])
      : null;

    if (!userData) {
      return res.status(401).json({ error: "No authorization token provided" });
    }

    const newUser = await createNewUser(userData);
    res.send(newUser);
  } catch (e) {
    console.error("Error creating user:", e);
    res
      .status(500)
      .json({ error: "Failed to create user", details: e.message });
  }
};

const validateAccessToken = async (req, res) => {
  try {
    const token = req.body.accessToken;
    const validation = await validateJwt(token);

    if (validation.valid) {
      res.send(validation.currentUser);
    } else {
      res.sendStatus(403);
    }
  } catch (e) {
    console.error("Error validating token:", e);
    res
      .status(500)
      .json({ error: "Failed to validate token", details: e.message });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (e) {
    console.error("Error getting users:", e);
    res.status(500).json({ error: "Failed to get users", details: e.message });
  }
};

const getSpecificUser = async (req, res, next) => {
  try {
    const sub = req.params.sub;
    const user = await getUserByGoogleUserId(sub);
    res.send(user);
  } catch (e) {
    console.error("Error getting specific user:", e);
    res.status(500).json({ error: "Failed to get user", details: e.message });
  }
};

const destroyUser = async (req, res, next) => {
  try {
    const userName = req.params.username;
    const user = await deleteUserByUsername(userName);
    res.send(user);
  } catch (e) {
    console.error("Error deleting user:", e);
    res
      .status(500)
      .json({ error: "Failed to delete user", details: e.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getSpecificUser,
  destroyUser,
  validateAccessToken,
};
