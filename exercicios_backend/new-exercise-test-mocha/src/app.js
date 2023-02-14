const express = require('express');
const { getElements, addElements, updateElements } = require('./responseAPI');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const elementChocolates = await getElements();

  res.status(200).json({ result: elementChocolates });
});

app.put('/chocolates/:Id', async (req, res) => {
  const { Id } = req.params;
  const id = Number(Id);
  const { name, brandId } = req.body;
  const objectUpdate = {
    id,
    name,
    brandId,
  };

  const elements = await updateElements(Number(Id), objectUpdate);

  res.status(202).json({ result: elements });
});

app.post('/chocolates', async (req, res) => {
  const { name, brandId } = req.body;
  const elementChocolates = await getElements();
  const id = elementChocolates.length + 1;
  const newObject = {
    id,
    name,
    brandId,
  };

  const newChocolateList = await addElements(newObject);

  res.status(201).json({ result: newChocolateList });
});

module.exports = app;