const fs = require("fs").promises;

const main = async () => {
  try {
    const data = await fs.readFile('./meu_arquivo.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log('Erro ao ler arquivo' + error.message);
  }
}

main()