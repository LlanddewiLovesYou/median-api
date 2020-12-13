const JWT = require("jsonwebtoken");
const User = require("../models/user");

const getAccessToken = async (userData) => {
  const accessToken = await JWT.sign(userData, process.env.JWT_SECRET);
  return accessToken;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserByUsername = async (userName) => {
  const users = await User.find({ userName: userName });
  return users[0];
};

const deleteUserByUsername = async (userName) => {
  const user = User.find({ userName: userName });
  await user.deleteMany({ userName });
  return user[0];
};

module.exports = {
  getAccessToken,
  getAllUsers,
  getUserByUsername,
  deleteUserByUsername,
};
