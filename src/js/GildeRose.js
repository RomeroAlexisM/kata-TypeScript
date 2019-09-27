"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgedBrie_1 = require("./AgedBrie");
var BackstagePasses_1 = require("./BackstagePasses");
var Conjured_1 = require("./Conjured");
var Sulfuras_1 = require("./Sulfuras");
var DefaultItem_1 = require("./DefaultItem");
var GildeRose = /** @class */ (function () {
    function GildeRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildeRose.prototype.selectItem = function (name, sellIn, quality) {
        switch (name) {
            case 'AgedBrie':
                var agedBrie = new AgedBrie_1.AgedBrie(sellIn, quality);
                console.log(agedBrie.updateQuality());
                break;
            case 'BackstagePasses':
                var backstagePassest = new BackstagePasses_1.BackstagePassest(sellIn, quality);
                console.log(backstagePassest.updateQuality());
                break;
            case 'Conjured':
                var conjured = new Conjured_1.Conjured(sellIn, quality);
                console.log(conjured.updateQuality());
                break;
            case 'Sulfuras':
                var sulfuras = new Sulfuras_1.Sulfuras(sellIn, quality);
                console.log(sulfuras.updateState());
                break;
            default:
                var defaultItem = new DefaultItem_1.DefaultItem(name, sellIn, quality);
                console.log(defaultItem.updateQuality());
                break;
        }
    };
    return GildeRose;
}());
exports.GildeRose = GildeRose;
//# sourceMappingURL=GildeRose.js.map