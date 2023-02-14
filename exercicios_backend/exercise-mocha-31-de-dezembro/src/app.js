const express = require('express');
const chocolates = require('./routes/chocolates');

const app = express();
app.use(express.json());

app.use('/chocolates', chocolates);

module.exports = app;