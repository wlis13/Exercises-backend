"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapesioArea = exports.getLosangoArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(sede) {
    return sede ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, curr) => acc + curr, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sidaA, sideB, sideC) {
    const checkSideA = sideB - sideC < sidaA && sidaA < sideB + sideC;
    const checkSideB = sidaA - sideC < sideB && sideB < sidaA + sideC;
    const checkSideC = sidaA - sideB < sideC && sideC < sidaA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getLosangoArea(diagY, diagX) {
    return (diagY * diagX) / 2;
}
exports.getLosangoArea = getLosangoArea;
function getTrapesioArea(sideh, sideB, sideb) {
    return ((sideB + sideb) * sideh) / 2;
}
exports.getTrapesioArea = getTrapesioArea;
function getCircleArea(r) {
    return Math.floor(Math.PI * r ** 2);
}
exports.getCircleArea = getCircleArea;
