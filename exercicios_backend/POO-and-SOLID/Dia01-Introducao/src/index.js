var TVs = /** @class */ (function () {
    function TVs(brand, size, resolution, connection, connectedTo) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connection = connection;
        this._connectedTo = connectedTo;
    }
    TVs.prototype.turnOn = function () {
        console.log("\n    brand: " + this._brand + ",\n    size: " + this._size + ",\n    resolution: " + this._resolution + ",\n    connection: " + this._connection + ",\n    ");
    };
    Object.defineProperty(TVs.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (newValue) {
            if (newValue === 'Playstation') {
                this._brand = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TVs.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (newValue) {
            if (newValue > 0) {
                this._size = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    TVs.prototype.newSize = function () {
        this._size += 1;
    };
    Object.defineProperty(TVs.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (newValue) {
            if (this._connection.includes(newValue)) {
                this._connectedTo = newValue;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return TVs;
}());
var tv01 = new TVs('Sony', 40, '1920X1080', ['HDMI', 'Ethernet', 'VGA'], 'Ethernet');
tv01.turnOn();
tv01.size = 42;
tv01.brand = 'Playstation';
tv01.connectedTo = 'HDMI';
tv01.connectedTo = 'polystation';
console.log(tv01.size);
console.log(tv01.brand);
console.log(tv01.connectedTo);
