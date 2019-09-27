"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conjured = /** @class */ (function () {
    function Conjured(sellIn, quality) {
        this.MIN_QUALITY = 0;
        this.TWO_QUALITY_UNITS = 2;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    Conjured.prototype.updateQuality = function () {
        if (this.quality > this.MIN_QUALITY) {
            this.decreaseQuality(this.TWO_QUALITY_UNITS);
        }
        return this.quality;
    };
    Conjured.prototype.decreaseQuality = function (deratingValue) {
        this.quality = this.quality - deratingValue;
    };
    return Conjured;
}());
exports.Conjured = Conjured;
//# sourceMappingURL=Conjured.js.map