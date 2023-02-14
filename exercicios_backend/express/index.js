const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const Sequelize = require('sequelize');

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set("views", "./views")


const sequelize = new Sequelize('Test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

//Rotas

app.get("/form", function (req, res) {
  res.render("form")
})

app.listen(8081)