const fs = require('fs').promises;
const path = require('path');
const WAY_DATA_JSON = '../util/simpsonsFamily.json';

const newCharacter = async (newValue) => {

  const getJson = await fs.readFile(path.resolve(__dirname, WAY_DATA_JSON));
  const parsing = JSON.parse(getJson);
  const allValues = [...parsing, newValue];
  await fs.writeFile(path.resolve(__dirname, WAY_DATA_JSON), JSON.stringify(allValues))
};

newCharacter({
  id: "5",
  name: "Wlisses Fernando"
});