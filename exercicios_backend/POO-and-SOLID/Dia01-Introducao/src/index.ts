class TVs {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connection: string[];
  private _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connection: string[],
    connectedTo: string
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connection = connection;
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log(`
    brand: ${this._brand},
    size: ${this._size},
    resolution: ${this._resolution},
    connection: ${this._connection},
    `);
  }

  get brand() {
    return this._brand;
  }

  get size() {
    return this._size;
  }

  set size(newValue: number) {
    if (newValue > 0) {
      this._size = newValue;
    }
  }
  newSize() {
    this._size += 1;
  }
  set brand(newValue: string) {
    if (newValue === 'Playstation') {
      this._brand = newValue;
    }
  }

  set connectedTo(newValue: string) {
    if (this._connection.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  get connectedTo() {
    return this._connectedTo as string;
  }
}

const tv01 = new TVs(
  'Sony',
  40,
  '1920X1080',
  ['HDMI', 'Ethernet', 'VGA'],
  'Ethernet'
);

tv01.turnOn();
tv01.size = 42;
tv01.brand = 'Playstation';
tv01.connectedTo = 'HDMI';
tv01.connectedTo = 'polystation';

console.log(tv01.size);
console.log(tv01.brand);
console.log(tv01.connectedTo);
