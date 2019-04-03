const _ = require('lodash');
const { User } = require('./user.model');

const api = module.exports;

api.listUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

api.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

api.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(_.omit(user.toObject(), 'password'));
};

api.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(User);
};

api.deleteUser = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  res.send(User);
};