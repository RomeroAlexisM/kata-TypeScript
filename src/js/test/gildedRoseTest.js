"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GildedRose_1 = require("../app/GildedRose");
var Item_1 = require("../app/Item");
var items = [
    new Item_1.Item("+5 Dexterity Vest", 10, 20),
    new Item_1.Item("AgedBrie", 2, 0),
    new Item_1.Item("Elixir of the Mongoose", 5, 7),
    new Item_1.Item("Sulfuras", 0, 80),
    new Item_1.Item("Sulfuras", -1, 80),
    new Item_1.Item("BackstagePasses", 15, 20),
    new Item_1.Item("BackstagePasses", 10, 49),
    new Item_1.Item("BackstagePasses", 5, 49),
    new Item_1.Item("Conjured", 3, 6)
];
var gildedRose = new GildedRose_1.GildedRose(items);
var days = 2;
for (var i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(function (element) {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    });
    console.log();
    gildedRose.updateItem();
}
//# sourceMappingURL=gildedRoseTest.js.map