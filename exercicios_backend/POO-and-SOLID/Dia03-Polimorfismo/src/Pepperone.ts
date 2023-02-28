import Pizza from './Pizza';

class Pepperone extends Pizza {
  constructor(size: 'média' | 'grande' | 'gigante') {
    super(size);
    this._ingredients.push('pepperone', 'mussarela', 'azeitona');
  }

  public makePizza(): string {
    return 'está pronta pizza de pepperone';
  }
}

const pepperone = new Pepperone('gigante');
console.log(pepperone.makePizza());
console.log(pepperone.pizzaSize());
console.log(pepperone.printPrice());
console.log(Pizza.Counter);

const pepperone01 = new Pepperone('grande');
console.log(pepperone01.makePizza());
console.log(pepperone01.pizzaSize());
console.log(pepperone01.printPrice());
console.log(Pizza.Counter);

const pepperone02 = new Pepperone('média');
console.log(pepperone02.makePizza());
console.log(pepperone02.pizzaSize());
console.log(pepperone02.printPrice());
console.log(Pizza.Counter);

export default Pepperone;
