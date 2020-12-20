const checkPermissions = (permission) => {
  return function (req, res, next) {
    const access = req.user.permissions === permission;
    if (access) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};

module.exports = { checkPermissions };
