var TVs = /** @class */ (function () {
    function TVs(brand, size, resolution, connection) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connection = connection;
    }
    TVs.prototype.turnOn = function () {
        console.log("\n    brand: " + this._brand + ",\n    size: " + this._size + ",\n    resolution: " + this._resolution + ",\n    connection: " + this._connection + ",\n    ");
    };
    return TVs;
}());
var tv01 = new TVs('Sony', 40, '1920X1080', ['HDMI', 'Ethernet', 'VGA']);
tv01.turnOn();
