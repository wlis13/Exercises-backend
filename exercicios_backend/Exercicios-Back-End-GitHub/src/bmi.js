const readLine = require('readline-sync');
const maxAndMin = require('../util/data01');

const infoUser = () => {
  const weight = readLine.questionFloat('What your weight?:');
  const height = readLine.questionFloat('What your height?:');
  if (height > 3 || weight > 400) {
    return 'Valor não calculável.';
  }
  const calculate = Number((weight / height ** 2).toFixed(1));

  const keys = Object.keys(maxAndMin);
  const findValues = keys.find((status) => {
    const { maxBMI, minBMI } = maxAndMin[status];
    return calculate >= minBMI && calculate <= maxBMI;
  });
  return `Your BMI is: ${ calculate } ${ findValues }`;
};

module.exports =
{
  infoUser,
};
