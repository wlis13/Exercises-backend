const lineReadi = require('readline-sync');
const { writeFiling } = require('./pratica');

const writeInile = async () => {
  const id = lineReadi.questionInt('digite o id do comando:');
  const name = lineReadi.question('Qual o nome do comando?');
  const util = lineReadi.question('Para que serve esse comando?');
  const program = lineReadi.question('Em qual programa é usado esse comando?');
  const sintaxeEX = lineReadi.question('Por favor descreva a sintaxe:');

  const everyInfo = { id, name, util, program, sintaxeEX };
  writeFiling(everyInfo);
};

writeInile();