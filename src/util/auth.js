const { OAuth2Client } = require("google-auth-library");
const { getAccessToken } = require("../services/UserService");
require("dotenv").config();

const authenticateToken = async (req, res, next) => {
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "postmessage",
  );

  const verified = await oAuth2Client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  req.user = verified.getPayload();

  next();
};

const sendGoogleAuthResponse = async (user, res) => {
  const accessToken = await getAccessToken(user.toJSON());
  res.redirect("http://localhost:5173/home");
  res.send({ accessToken, currentUser: user });
};

module.exports = { authenticateToken, sendGoogleAuthResponse };
