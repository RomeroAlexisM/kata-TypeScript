"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgedBrie_1 = require("./AgedBrie");
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var prueb1 = new AgedBrie_1.AgedBrie();
prueb1.updateQuality();
//# sourceMappingURL=Item.js.map