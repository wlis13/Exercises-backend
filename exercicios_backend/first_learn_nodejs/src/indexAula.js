const readLine = require('readline-sync');
const { writeNewMission } = require('./utils/fsUtils');

const main = () => {
  const Nome = readLine.question('Qual o nome da missão?');
  const Ano = readLine.questionInt('Qual é o ano da missão?');
  const Pais = readLine.question('Onde é o pais da missão?');
  const Destino = readLine.question('Qual o destino da missão?');
  const missionDate = [Nome, Ano, Pais, Destino];
  writeNewMission(missionDate);
};

main();