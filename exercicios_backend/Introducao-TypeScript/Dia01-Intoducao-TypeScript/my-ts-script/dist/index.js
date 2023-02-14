"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlinesync = __importStar(require("readline-sync"));
const length = __importStar(require("./length"));
const mass = __importStar(require("./mass"));
const volume = __importStar(require("./volume"));
const area = __importStar(require("./area"));
const capacity = __importStar(require("./capacity"));
let values;
let baseUnit;
let baseConv;
let indice;
const units = ['comprimento', 'massa', 'volume', 'capacidade', 'área'];
indice = readlinesync.keyInSelect(units, ' Qual é a unidade de medida? ');
values = Number(readlinesync.question('digite o valor de conversão: '));
baseUnit = readlinesync.question('digite a unidade atual: ');
baseConv = readlinesync.question('digite a unidade de conversão: ');
console.log(indice);
if (units[indice] === 'comprimento') {
    console.log(length.convert(values, baseUnit, baseConv));
}
if (indice === 1) {
    console.log(mass.convertMass(values, baseUnit, baseConv));
}
if (indice === 2) {
    console.log(volume.convertVolume(values, baseUnit, baseConv));
}
if (indice === 3) {
    console.log(capacity.convertCapacity(values, baseUnit, baseConv));
}
if (indice === 4) {
    console.log(area.convertArea(values, baseUnit, baseConv));
}
