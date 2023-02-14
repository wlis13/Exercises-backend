const { calculadoraIMC } = require('./imc');

const main = () => {
  const showValue = calculadoraIMC();
  console.log(showValue);
};

main();