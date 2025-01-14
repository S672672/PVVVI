const logger = require('../utils/logger');

exports.errorHandler = (err, req, res, next) => {
  logger.error(`${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
};