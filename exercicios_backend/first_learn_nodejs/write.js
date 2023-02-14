const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./meu_arquivo.txt', 'new text in file');
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.log(`Erro ao escrever arquivo${error.message}`);
  }
};

main();