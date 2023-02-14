export const convert = (
  value: number,
  baseUnit: string,
  baseConv: string
): string => {
  const measures: { [key: string]: number } = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  };
  const result = (value * measures[baseUnit]) / measures[baseConv];
  return `${value}${baseUnit} é igual a: ${result}${baseConv}`;
};
