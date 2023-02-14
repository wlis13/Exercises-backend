const fs = require('fs').promises;
const path = require('path');

const PATH_CHOCOLATES = '../chocolates.json';

const getElements = async () => {
  try {
    const elements = await fs.readFile(path.resolve(__dirname, PATH_CHOCOLATES));
    const elementsParse = JSON.parse(elements);
    return elementsParse;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

const addElements = async (newElement) => {
  const actualElements = await getElements();
  const everyElements = [...actualElements, newElement];
  const everyParse = JSON.stringify(everyElements);
  try {
    await fs.writeFile(path.resolve(__dirname, PATH_CHOCOLATES), everyParse);
    return everyElements;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

const updateElements = async (id, newElement) => {
  const actualElements = await getElements();
  const elementToId = actualElements.filter((iten) => iten.id !== Number(id));
  const newElements = [...elementToId, newElement];
  const newElementsParse = JSON.stringify(newElements);
  try {
    await fs.writeFile(path.resolve(__dirname, PATH_CHOCOLATES), newElementsParse);
    return newElements;
  } catch (error) {
    console.error(`error ${ error }`);
  }
};

module.exports = {
  getElements,
  addElements,
  updateElements,
};
