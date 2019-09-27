"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultItem = /** @class */ (function () {
    function DefaultItem(name, sellIn, quality) {
        this.MIN_QUALITY = 0;
        this.ZERO_DAYS = 0;
        this.ONE_QUALITY_UNITS = 1;
        this.TWO_QUALITY_UNITS = 2;
        this.sellIn = sellIn;
        this.quality = quality;
        this.name = name;
    }
    DefaultItem.prototype.updateQuality = function () {
        if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
            this.decreaseQuality(this.ONE_QUALITY_UNITS);
        }
        else {
            this.decreaseQuality(this.TWO_QUALITY_UNITS);
        }
        return this.quality;
    };
    DefaultItem.prototype.decreaseQuality = function (deratingValue) {
        if (this.quality > this.MIN_QUALITY) {
            this.quality = this.quality - deratingValue;
        }
    };
    return DefaultItem;
}());
exports.DefaultItem = DefaultItem;
//# sourceMappingURL=DefaultItem.js.map