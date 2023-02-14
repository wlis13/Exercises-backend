const readLine = require('readline-sync');

const name = readLine.question('digite seu nome:');
const age = readLine.questionInt('type you age:');
console.log(`Nice to meet you ${name}, you have: ${age} years old`);

function assincrona(num1, num2) {
  const promise = new Promise((resolve, reject) => {
 if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

  console.log(assincrona(2, 2));
