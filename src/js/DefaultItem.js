"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultItem = /** @class */ (function () {
    function DefaultItem(name, sellIn, quality) {
        this.MIN_QUALITY = 0;
        this.ZERO_DAYS = 0;
        this.sellIn = sellIn;
        this.quality = quality;
        this.name = name;
    }
    DefaultItem.prototype.updateQuality = function () {
        this.sellIn--;
        if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
            this.decreaseQuality(1);
        }
        else {
            this.sellIn = 0;
            this.decreaseQuality(2);
        }
        return this.name + ' sellIn = ' + this.sellIn + ' quality = ' + this.quality;
    };
    DefaultItem.prototype.decreaseQuality = function (deratingValue) {
        this.quality = this.quality - deratingValue;
    };
    return DefaultItem;
}());
exports.DefaultItem = DefaultItem;
//# sourceMappingURL=DefaultItem.js.map