const mongoose = require('mongoose');

const institutionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sif: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  photoPath: {
    type: String
  },
  bankAccount: {
    account: {
      type: String,
      required: true
    },
    bank: {
      type: String,
      required: true
    },
    agency: {
      type: String,
      required: true
    }
  }
}, { timestamps: true });

const Institution = mongoose.model('institution', institutionSchema);

module.exports = { Institution };
