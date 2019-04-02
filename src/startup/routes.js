module.exports = app => {
  app.use('/', (req, res) => res.send('This API is running baby!'));
};
