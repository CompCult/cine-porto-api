
const logger = require('morgan');

module.exports = (app) => {
  if (process.env.NODE_ENV !== 'test') app.use(logger('dev'));
};
