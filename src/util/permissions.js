const { getUserByGoogleUserId } = require("../services/OAuthService");

const checkPermissions = () => {
  return async (req, res, next) => {
    const userData = req.user;

    const { isAdmin } = await getUserByGoogleUserId(userData.sub);

    if (isAdmin) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};

module.exports = { checkPermissions };
