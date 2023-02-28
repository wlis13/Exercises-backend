import Pizza from './Pizza';

class Margherita extends Pizza {
  constructor(size: 'média' | 'grande' | 'gigante') {
    super(size);
    this._ingredients.push('tomate', 'manjericão', 'orégano');
  }

  public makePizza(): string {
    return 'Está pronta, pizza de margherita';
  }
}

const margherita = new Margherita('gigante');
console.log(margherita.makePizza());
console.log(margherita.pizzaSize());
console.log(margherita.printPrice());
console.log(Pizza.Counter);

const margherita2 = new Margherita('grande');
console.log(margherita2.makePizza());
console.log(margherita2.pizzaSize());
console.log(margherita2.printPrice());
console.log(Pizza.Counter);

const margherita3 = new Margherita('média');
console.log(margherita3.makePizza());
console.log(margherita3.pizzaSize());
console.log(margherita3.printPrice());
console.log(Pizza.Counter);

export default Margherita;
