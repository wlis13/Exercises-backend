const readLine = require('readline-sync');

const askName = () => {
  return readLine.question('Qual nome você quer pesquisar?')
}

module.exports = {
  askName,
}