// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 18;

const isOfLegalAge = (param: boolean | string): boolean => {
  return !!param;
};

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
