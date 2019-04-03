const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  photoPath: {
    type: String
  }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = { User };
