const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User } = require('./user.model');

const api = module.exports;

api.listUsers = async (req, res) => {
  const users = await User.find().select('-password -photoPath');
  res.send(users);
};

api.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password -photoPath');
  res.send(user);
};

api.createUser = async (req, res) => {
  const userAlreadyExists = await User.findOne({ email: req.body.email });
  if (userAlreadyExists) {
    return res.status(409).send('This email is already registered');
  }

  const user = new User(req.body);
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  res.status(201).send(_.omit(user.toObject(), 'password'));
};

api.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
};

api.deleteUser = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  res.send(user);
};

api.auth = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);
    if (passwordsMatch) {
      const token = jwt.sign({ email: user.email }, config.get('jwtSecretKey'));
      return res.send(token);
    }
  }

  res.status(401).send('Invalid email or password');
};
