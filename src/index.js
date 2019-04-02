require('express-async-errors');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/logger')(app);
require('./startup/parser')(app);
require('./startup/cors')(app);

require('./startup/routes')(app);

require('./startup/errors')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on ${port}`));

module.exports = app;
