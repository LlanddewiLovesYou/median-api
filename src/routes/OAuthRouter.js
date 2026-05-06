const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const { getAuthTokenAndUserFromGoogle } = require("../api/OAuthController");
const jwtDecode = require("jwt-decode");
require("dotenv").config();

const OAuthRouter = express.Router();

// OAuthRouter.get("/", getAuthTokenAndUserFromGoogle);

OAuthRouter.post("/google", async (req, res) => {
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "postmessage",
  );
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens

  res.json(tokens);
});

OAuthRouter.get("/google/verify", async (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // extract token from header

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = await jwtDecode(token); // decode and verify token
    const expired = decoded.exp * 1000 < Date.now(); // check if token is expired

    if (expired) {
      return res.status(403).json({ valid: false, error: "Token expired" });
    }

    res.json({ valid: true, currentUser: decoded }); // send back user info
  } catch (error) {
    console.error("Token validation error:", error);
    res.status(403).json({ valid: false, error: "Invalid token" });
  }
});

module.exports = OAuthRouter;
