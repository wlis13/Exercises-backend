export const convertMass = (
  value: number,
  baseUnit: string,
  baseConv: string
): string => {
  const measures: { [key: string]: number } = {
    kg: 1000,
    hg: 100,
    dag: 10,
    g: 1,
    dg: 0.1,
    cg: 0.01,
    mg: 0.001,
  };
  const result = (value * measures[baseUnit]) / measures[baseConv];
  return `${value}${baseUnit} é igual a: ${result}${baseConv}`;
};
