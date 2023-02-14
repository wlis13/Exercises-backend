"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertVolume = void 0;
const convertVolume = (value, baseUnit, baseConv) => {
    const measures = {
        'km³': 10 ** 9,
        'hm³': 10 ** 6,
        'dam³': 10 ** 3,
        'm³': 1 ** 3,
        'dm³': 10 ** -9,
        'cm³': 10 ** -6,
        'mm³': 10 ** -3,
    };
    const result = (value * measures[baseUnit]) / measures[baseConv];
    return `${value}${baseUnit} é igual a: ${result}${baseConv}`;
};
exports.convertVolume = convertVolume;
