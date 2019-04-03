const userRouter = require('../resources/user/user.router');
const institutionRouter = require('../resources/institution/institution.router');

module.exports = app => {
  app.use('/users', userRouter);
  app.use('/institutions', institutionRouter);
  app.get('/', (req, res) => res.send('This API is running baby!'));
};
