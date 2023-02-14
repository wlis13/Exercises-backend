const fs = require('fs').promises;
const path = require('path');

const FILE_JSON = './fileJson.json';

const readFiling = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILE_JSON));
    const jsonFormatter = JSON.parse(data);
    return jsonFormatter;
  } catch (error) {
    console.error(`Erro ao tentar ler arquivo ${error}`);
  }
};

const writeFiling = async (newFile) => {
  try {
    const oldFile = await readFiling();
    const everyFile = JSON.stringify([...oldFile, newFile]);
    console.log('Arquivo inserido com sucesso!');

    await fs.writeFile(path.resolve(__dirname, FILE_JSON), everyFile);
  } catch (error) {
    console.error(`Falha ao tentar escrever no arquivo ${error}`);
  }
};

module.exports = {
  writeFiling,
};