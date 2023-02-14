"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArea = void 0;
const convertArea = (value, baseUnit, baseConv) => {
    const measures = {
        km: 10 ** 6,
        hm: 10 ** 4,
        dam: 10 ** 2,
        m: 1 ** 2,
        dm: 10 ** -2,
        cm: 10 ** -4,
        mm: 10 ** -6,
    };
    const result = (value * measures[baseUnit]) / measures[baseConv];
    return `${value}${baseUnit} é igual a: ${result}${baseConv}`;
};
exports.convertArea = convertArea;
