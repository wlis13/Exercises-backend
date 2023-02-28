import Pepperone from './Pepperone';
import Pizza from './Pizza';

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
