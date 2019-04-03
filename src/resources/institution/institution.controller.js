const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { Instituition } = require('./institution.model');

const api = module.exports;

api.listInstituitions = async (req, res) => {
  const instituitions = await Instituition
    .find()
    .select('-password -photoPath');
  
  res.send(instituitions);
};

api.getInstituition = async (req, res) => {
  const instituition = await Instituition
    .findById(req.params.id)
    .select('-password -photoPath');
  
  res.send(instituition);
};

api.createInstituition = async (req, res) => {
  const instituitionAlreadyExists = await Instituition
    .findOne({
      $or: [
        { email: req.body.email },
        { sif: req.body.sif } 
      ]
    });

  if (instituitionAlreadyExists) {
    return res.status(409).send('This institution is already registered');
  }

  const instituition = new Instituition(req.body);
  const salt = await bcrypt.genSalt();
  instituition.password = await bcrypt.hash(instituition.password, salt);

  await instituition.save();

  res.status(201).send(_.omit(instituition.toObject(), 'password'));
};

api.updateInstituition = async (req, res) => {
  const instituition = await Instituition.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(instituition);
};

api.deleteInstituition = async (req, res) => {
  const instituition = await Instituition.findByIdAndRemove(req.params.id);
  res.send(instituition);
};

api.auth = async (req, res) => {
  const instituition = await Instituition.findOne({ email: req.body.email });
  if (instituition) {
    const passwordsMatch = await bcrypt.compare(req.body.password, instituition.password);
    if (passwordsMatch) {
      const token = jwt.sign({
        email: instituition.email,
        type: 'institution'
      }, config.get('jwtSecretKey'));

      return res.send(token);
    }
  }

  res.status(401).send('Invalid email or password');
};
