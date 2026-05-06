const User = require("../models/user");
require("dotenv").config();

const getUserByGoogleUserId = async (sub) => {
  const users = await User.find({ sub });
  return users[0];
};

const getUserDataFromGoogle = async (access_token) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`
  );
  const data = await response.json();
  return data;
};

module.exports = {
  getUserByGoogleUserId,
  getUserDataFromGoogle,
};
