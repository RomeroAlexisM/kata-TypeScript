"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgedBrie = /** @class */ (function () {
    function AgedBrie(sellIn, quality) {
        this.MAX_QUALITY = 50;
        this.ONE_QUALITY_UNITS = 1;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    AgedBrie.prototype.updateQuality = function () {
        this.increaseQuality(this.ONE_QUALITY_UNITS);
        return this.quality;
    };
    AgedBrie.prototype.increaseQuality = function (incrementValue) {
        if (this.quality < this.MAX_QUALITY) {
            this.quality = this.quality + incrementValue;
        }
    };
    return AgedBrie;
}());
exports.AgedBrie = AgedBrie;
//# sourceMappingURL=AgedBrie.js.map