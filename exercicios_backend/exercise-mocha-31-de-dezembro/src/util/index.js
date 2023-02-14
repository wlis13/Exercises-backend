const fs = require('fs').promises;
const path = require('path');

const PATH_CHOCOLATES = '../../chocolates.json';

const readChocolates = async () => {
  const getReadChocolates = await fs.readFile(path.resolve(__dirname, PATH_CHOCOLATES));
  const parseChocolates = JSON.parse(getReadChocolates);
  try {
    return parseChocolates;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

const readChocolateById = async (id) => {
  const ReadChocolates = await fs.readFile(path.resolve(__dirname, PATH_CHOCOLATES));
  const parseChocolates = JSON.parse(ReadChocolates);
  const getChocolateById = parseChocolates.chocolates.find((iten) => iten.id === Number(id));
  console.log(getChocolateById);
  try {
    return getChocolateById;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

const updateChocolates = async (id, newChocolate) => {
  const getactualChocolates = await readChocolates();
  const removeChocolateById = getactualChocolates.chocolates
    .filter((iten) => iten.id !== Number(id));
  const chocolateUpdate = [...removeChocolateById, newChocolate];
  const stringifyUpdate = JSON.stringify(chocolateUpdate);
  try {
    await fs.writeFile(path.resolve(__dirname, '../../chocolates.json'), stringifyUpdate);
    return chocolateUpdate;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

module.exports = {
  readChocolates,
  readChocolateById,
  updateChocolates,
};