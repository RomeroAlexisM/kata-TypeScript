"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sulfuras = /** @class */ (function () {
    function Sulfuras(sellIn, quality) {
        this.ZERO_DAYS = 0;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    Sulfuras.prototype.updateState = function () {
        this.sellIn--;
        if (this.sellIn < this.ZERO_DAYS) {
            this.sellIn = 0;
        }
        return 'Sulfuras sellIn = ' + this.sellIn + ' quality = ' + this.quality;
    };
    return Sulfuras;
}());
exports.Sulfuras = Sulfuras;
//# sourceMappingURL=Sulfuras.js.map