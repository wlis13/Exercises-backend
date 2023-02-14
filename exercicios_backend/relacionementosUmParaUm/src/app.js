const express = require('express');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(express.json());

app.get('/employee', employeeController.getAll);
app.get('/employees/:id', employeeController.getById);
app.post('employee', employeeController.insert);

module.exports = app;