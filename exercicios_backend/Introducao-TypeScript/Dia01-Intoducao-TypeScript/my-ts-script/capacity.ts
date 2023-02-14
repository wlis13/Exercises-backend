export const convertCapacity = (
  value: number,
  baseUnit: string,
  baseConv: string
): string => {
  const measures: { [key: string]: number } = {
    kl: 1000,
    hl: 100,
    dal: 10,
    l: 1,
    dl: 0.1,
    cl: 0.01,
    ml: 0.001,
  };
  const result = (value * measures[baseUnit]) / measures[baseConv];
  return `${value}${baseUnit} é igual a: ${result}${baseConv}`;
};
