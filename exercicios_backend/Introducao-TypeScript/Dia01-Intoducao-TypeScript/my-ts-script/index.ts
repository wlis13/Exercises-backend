import * as readlinesync from 'readline-sync';
import * as length from './length';
import * as mass from './mass';
import * as volume from './volume';
import * as area from './area';
import * as capacity from './capacity';

let values: number;
let baseUnit: string;
let baseConv: string;
let indice: number;

const units = ['comprimento', 'massa', 'volume', 'capacidade', 'área'];
indice = readlinesync.keyInSelect(units, ' Qual é a unidade de medida? ');

values = Number(readlinesync.question('digite o valor de conversão: '));
baseUnit = readlinesync.question('digite a unidade atual: ');
baseConv = readlinesync.question('digite a unidade de conversão: ');

if (units[indice] === 'comprimento') {
  console.log(length.convert(values, baseUnit, baseConv));
}
if (units[indice] === 'massa') {
  console.log(mass.convertMass(values, baseUnit, baseConv));
}
if (units[indice] === 'volume') {
  console.log(volume.convertVolume(values, baseUnit, baseConv));
}
if (units[indice] === 'capacidade') {
  console.log(capacity.convertCapacity(values, baseUnit, baseConv));
}
if (units[indice] === 'área') {
  console.log(area.convertArea(values, baseUnit, baseConv));
}
