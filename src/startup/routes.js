const userRouter = require('../resources/user/user.router');

module.exports = app => {
  app.use('/users', userRouter);
  /* app.get('/', (req, res) => res.send('This API is running baby!')); */
};
