const express = require('express');
const movies = require('../data/movies');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const totalValues = {
    message: "aprendendo um pouco mais sobre docker e docker-compose",
    quant: movies.length,
    movies
  }
  res.status(200).json(totalValues)
});

app.post('/movies', (req, res) => {
  const { movie, price } = req.body;
  const newMovies = {
    id: movies.length + 1,
    movie,
    price,
  }

  movies.push(newMovies);

  res.status(201).json(movies);
});

module.exports = app;


