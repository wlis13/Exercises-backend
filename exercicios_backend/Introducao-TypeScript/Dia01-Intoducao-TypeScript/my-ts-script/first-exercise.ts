const numberInput = 7;

const isItAprime = (param: number): boolean => {
  for (let index = 2; index < param; index += 1) {
    if (param % index === 0) {
      return false;
    }
  }
  return param > 1;
};

isItAprime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);
