const User = require("../models/user");
const { OAuth2Client } = require("google-auth-library");
const {
  getUserByGoogleUserId,
  getUserDataFromGoogle,
} = require("../services/OAuthService");
const { sendGoogleAuthResponse } = require("../util/auth");
require("dotenv").config();

// const getAuthTokenAndUserFromGoogle = async (req, res) => {
//   const code = req.query.code;
//   try {
//     const oAuth2Client = new OAuth2Client(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       process.env.GOOGLE_REDIRECT_URI,
//     );

//     const response = await oAuth2Client.getToken(code);
//     const access_token = response.tokens.access_token;

//     await oAuth2Client.setCredentials(response.tokens);
//     const googleUser = await getUserDataFromGoogle(access_token);

//     const existingUser = await getUserByGoogleUserId(googleUser.sub);

//     if (existingUser) {
//       sendGoogleAuthResponse(existingUser, res);
//     } else {
//       const user = await User.create({
//         sub: googleUser.sub,
//         isAdmin: false,
//       });
//       sendGoogleAuthResponse(user, res);
//     }
//   } catch (error) {
//     console.error("Error during OAuth process:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

module.exports = {
  // getAuthTokenAndUserFromGoogle,
};
