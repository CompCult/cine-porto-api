const mongoose = require('mongoose');
const config = require('config');

const db = config.get('db');

module.exports = () => {
  mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log(`Connected on database ${db}...`))
    .catch(err => console.log(`Error connecting to ${db}` + err));
};
