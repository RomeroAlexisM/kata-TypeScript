"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conjured = /** @class */ (function () {
    function Conjured(sellIn, quality) {
        this.MIN_QUALITY = 0;
        this.ZERO_DAYS = 0;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    Conjured.prototype.updateQuality = function () {
        this.sellIn--;
        if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
            this.decreaseQuality(2);
        }
        else {
            this.sellIn = 0;
            this.decreaseQuality(2);
        }
        return 'Conjured sellIn = ' + this.sellIn + ' quality = ' + this.quality;
    };
    Conjured.prototype.decreaseQuality = function (deratingValue) {
        this.quality = this.quality - deratingValue;
    };
    return Conjured;
}());
exports.Conjured = Conjured;
//# sourceMappingURL=Conjured.js.map