class TVs {
  _brand: string;
  _size: number;
  _resolution: string;
  _connection: string[];
  _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connection: string[]
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connection = connection;
  }

  turnOn() {
    console.log(`
    brand: ${this._brand},
    size: ${this._size},
    resolution: ${this._resolution},
    connection: ${this._connection},
    `);
  }
}

const tv01 = new TVs('Sony', 40, '1920X1080', ['HDMI', 'Ethernet', 'VGA']);

tv01.turnOn();
