"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgedBrie = /** @class */ (function () {
    function AgedBrie(sellIn, quality) {
        this.MAX_QUALITY = 50;
        this.ZERO_DAYS = 0;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    AgedBrie.prototype.updateQuality = function () {
        this.sellIn--;
        if (this.sellIn > this.ZERO_DAYS) {
            this.increaseQuality(1);
        }
        else {
            this.sellIn = 0;
            this.increaseQuality(1);
        }
        return 'AgedBrie sellIn = ' + this.sellIn + ' quality = ' + this.quality;
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