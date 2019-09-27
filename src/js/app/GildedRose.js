"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgedBrie_1 = require("./AgedBrie");
var BackstagePasses_1 = require("./BackstagePasses");
var Conjured_1 = require("./Conjured");
var Sulfuras_1 = require("./Sulfuras");
var DefaultItem_1 = require("./DefaultItem");
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.updateItem = function () {
        for (var index = 0; index < this.items.length; index++) {
            this.items[index].sellIn = this.updateSellIn(this.items[index].sellIn);
            this.items[index].quality = this.selectItem(this.items[index].name, this.items[index].sellIn, this.items[index].quality);
        }
    };
    GildedRose.prototype.updateSellIn = function (sellIn) {
        if (sellIn > 0) {
            sellIn--;
        }
        else {
            sellIn = 0;
        }
        return sellIn;
    };
    GildedRose.prototype.selectItem = function (name, sellIn, quality) {
        switch (name) {
            case 'AgedBrie':
                var agedBrie = new AgedBrie_1.AgedBrie(sellIn, quality);
                return agedBrie.updateQuality();
            case 'BackstagePasses':
                var backstagePassest = new BackstagePasses_1.BackstagePassest(sellIn, quality);
                return backstagePassest.updateQuality();
            case 'Conjured':
                var conjured = new Conjured_1.Conjured(sellIn, quality);
                return conjured.updateQuality();
            case 'Sulfuras':
                var sulfuras = new Sulfuras_1.Sulfuras(quality);
                return sulfuras.updateState();
            default:
                var defaultItem = new DefaultItem_1.DefaultItem(name, sellIn, quality);
                return defaultItem.updateQuality();
        }
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
//# sourceMappingURL=GildedRose.js.map