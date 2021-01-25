const errorHandler = (error, req, res, next) => {
  const message = error.message || "Something went wrong...";
  const status = error["status"] || 500;

  const reqBody = !isEmpty(req.body)
    ? `- Request Body: ${JSON.stringify(req.body)}`
    : "";
  const errorMessage = `${req.method} - ${status} - ${req.originalUrl} ${reqBody} \n${error.stack}`;

  if (process.env.APP_ENVIRONMENT !== "test") {
    log.error(errorMessage);
  }

  res.status(status).send({ status, message });
};

module.exports = { errorHandler };
