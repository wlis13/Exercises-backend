const express = require('express');
const { readChocolates, readChocolateById, updateChocolates } = require('../util');

const router = express.Router();

router.get('/', async (req, res) => {
  const chocolates = await readChocolates();
  res.status(200).json(chocolates);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const chocolates = await readChocolateById(id);
  res.status(200).json(chocolates);
});

router.put('/:Id', async (req, res) => {
  const { Id } = req.params;
  const { name, brandId } = req.body;
  const id = Number(Id);
  const newElement = {
    id,
    name,
    brandId,
  };

  const update = await updateChocolates(Id, newElement);
  res.status(200).json(update);
});

module.exports = router;