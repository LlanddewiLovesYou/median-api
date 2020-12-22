const JWT = require("jsonwebtoken");
const { default: jwtDecode } = require("jwt-decode");
const User = require("../models/user");

const getAccessToken = async (user) => {
  const accessToken = await JWT.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return accessToken;
};

const validateJwt = async (token) => {
  const valid = JWT.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      console.log(err);
      return false;
    }

    return true;
  });
  const currentUser = jwtDecode(token);

  return { valid, currentUser };
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserByUsername = async (userName) => {
  const users = await User.find({ userName: userName });
  return users;
};

const deleteUserByUsername = async (userName) => {
  const user = User.find({ _id: userName });
  await user.deleteMany({ _id: userName });
  return user[0];
};

module.exports = {
  getAccessToken,
  getAllUsers,
  getUserByUsername,
  deleteUserByUsername,
  validateJwt,
};
