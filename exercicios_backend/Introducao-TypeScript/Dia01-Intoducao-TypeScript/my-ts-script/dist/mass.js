"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMass = void 0;
const convertMass = (value, baseUnit, baseConv) => {
    const measures = {
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
exports.convertMass = convertMass;
