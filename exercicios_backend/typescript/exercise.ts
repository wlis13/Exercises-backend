export function getSquareArea(sede: number): number {
  return sede ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, curr) => acc + curr, 0);
}

export function triangleCheck(
  sidaA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = sideB - sideC < sidaA && sidaA < sideB + sideC;
  const checkSideB = sidaA - sideC < sideB && sideB < sidaA + sideC;
  const checkSideC = sidaA - sideB < sideC && sideC < sidaA + sideB;
  return checkSideA && checkSideB && checkSideC;
}

export function getLosangoArea(diagY: number, diagX: number): number {
  return (diagY * diagX) / 2;
}

export function getTrapesioArea(
  sideh: number,
  sideB: number,
  sideb: number
): number {
  return ((sideB + sideb) * sideh) / 2;
}

export function getCircleArea(r: number): number {
  return Math.floor(Math.PI * r ** 2);
}
