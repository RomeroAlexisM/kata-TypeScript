"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackstagePassest = /** @class */ (function () {
    function BackstagePassest(sellIn, quality) {
        this.MAX_QUALITY = 50;
        this.MIN_QUALITY = 0;
        this.TEN_DAYS = 10;
        this.FIVE_DAYS = 5;
        this.ZERO_DAYS = 0;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    BackstagePassest.prototype.updateQuality = function () {
        this.sellIn--;
        if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
            if (this.sellIn <= this.TEN_DAYS) {
                if (this.sellIn <= this.FIVE_DAYS) {
                    this.increaseQuality(3);
                }
                else {
                    this.increaseQuality(2);
                }
            }
            else {
                this.increaseQuality(1);
            }
        }
        else {
            this.sellIn = 0;
            this.decreaseQuality(this.quality);
        }
        return 'BackstagePassest sellIn = ' + this.sellIn + ' quality = ' + this.quality;
    };
    BackstagePassest.prototype.increaseQuality = function (incrementValue) {
        if (this.quality < this.MAX_QUALITY) {
            this.quality = this.quality + incrementValue;
        }
    };
    BackstagePassest.prototype.decreaseQuality = function (deratingValue) {
        this.quality = this.quality - deratingValue;
    };
    return BackstagePassest;
}());
exports.BackstagePassest = BackstagePassest;
//# sourceMappingURL=BackstagePasses.js.map