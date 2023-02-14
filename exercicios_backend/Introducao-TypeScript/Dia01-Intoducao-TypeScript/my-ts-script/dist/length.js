"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (value, baseUnit, baseConv) => {
    const measures = {
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
exports.convert = convert;
