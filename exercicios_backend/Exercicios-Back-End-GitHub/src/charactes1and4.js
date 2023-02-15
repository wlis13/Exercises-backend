const { getFetch } = require('../util/Fetch');
const path = require('path');
const fs = require('fs').promises;
const NEW_SIMPSONS_JSON = '../util/simpsonsFamily.json';

const charactes1Between4 = async () => {
  const charectesIndex = ['1', '2', '3', '4'];
  const everyCharacters = await getFetch();
  const characters = everyCharacters.filter((character) => {
    return charectesIndex.includes(character.id)
  });

  await fs.writeFile(path.resolve(__dirname, NEW_SIMPSONS_JSON), JSON.stringify(characters))
};

charactes1Between4();