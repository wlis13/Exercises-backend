abstract class Pizza {
  protected _size: 'média' | 'grande' | 'gigante';
  protected _ingredients: string[];
  private static _counter = 0;

  constructor(size: 'média' | 'grande' | 'gigante') {
    this._size = size;
    this._ingredients = ['farinha', 'sal', 'água', 'queijo', 'ovos'];
    Pizza._counter += 1;
  }

  public pizzaSize(): string {
    return this._size;
  }

  public static get Counter(): string {
    return `pedido numero: ${Pizza._counter}`;
  }

  public abstract makePizza(): string;

  public printPrice(): string {
    if (this._size === 'média') {
      return 'Price = 50,00';
    } else if (this._size === 'grande') {
      return 'Price = 100,00';
    } else {
      return 'Price = 150,00';
    }
  }
}

export default Pizza;
