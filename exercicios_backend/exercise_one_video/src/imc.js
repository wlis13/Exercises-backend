const PESO_KG = 80;
const ALTURA_CM = 178;

const calculadoraIMC = (value1, value2) => {
  console.log(`peso: ${ PESO_KG }, altura: ${ ALTURA_CM }`);

  const altura_em_metros = ALTURA_CM / 100;
  const altura_ao_quadrado = altura_em_metros ** 2;
  const calculo_IMC = PESO_KG / altura_ao_quadrado;

  return `IMC é igual á ${ calculo_IMC.toFixed(2) }`;
};

module.exports =
{
  calculadoraIMC,
}