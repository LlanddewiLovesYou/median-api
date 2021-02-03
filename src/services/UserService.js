const JWT = require("jsonwebtoken");
const { default: jwtDecode } = require("jwt-decode");
const User = require("../models/user");
const Game = require("../models/game");

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
  const userInfo = jwtDecode(token);

  const [currentUser] = await User.find({ _id: userInfo._id });

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
  const [user] = await User.find({ userName });
  const games = await Game.find({ userId: user._id });
  if (games.length > 0) {
    await Game.deleteMany({ userId: user._id });
  }
  await User.deleteMany({ userName: userName });
  return { user, games };
};

const addFriend = async (friendId, userId) => {
  const [currentUser] = await User.find({ _id: userId });

  const currentUsersUpdatedFriendList = [...currentUser.friends, friendId];

  await User.findOneAndUpdate(
    { _id: currentUser._id },
    { $set: { friends: currentUsersUpdatedFriendList } }
  );

  const updatedUser = await User.find({ _id: currentUser._id });

  return updatedUser;
};

const removeFriend = async (friendId, userId) => {
  const [currentUser] = await User.find({ _id: userId });

  const currentUsersUpdatedFriendList = currentUser.friends.filter(
    (id) => id !== friendId
  );

  await User.findOneAndUpdate(
    { _id: currentUser._id },
    { $set: { friends: currentUsersUpdatedFriendList } }
  );

  const updatedUser = User.find({ _id: currentUser._id });

  return updatedUser;
};

const findUsersFriends = async (userId) => {
  const [user] = await User.find({ _id: userId });
  const friendIds = user.friends;
  const friends = User.find({ _id: { $in: friendIds } }).sort({
    userName: "ASC",
  });
  return friends;
};

module.exports = {
  getAccessToken,
  getAllUsers,
  getUserByUsername,
  deleteUserByUsername,
  validateJwt,
  addFriend,
  removeFriend,
  findUsersFriends,
};
