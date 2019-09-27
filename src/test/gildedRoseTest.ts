import { GildedRose } from '../app/GildedRose';
import { Item } from '../app/Item';

const items = [
    new Item("+5 Dexterity Vest", 10, 20), 
    new Item("AgedBrie", 2, 0), 
    new Item("Elixir of the Mongoose", 5, 7), 
    new Item("Sulfuras", 0, 80), 
    new Item("Sulfuras", -1, 80),
    new Item("BackstagePasses", 15, 20), 
    new Item("BackstagePasses", 10, 49),
    new Item("BackstagePasses", 5, 49),
    new Item("Conjured", 3, 6)];

const gildedRose = new GildedRose(items);
var days: number = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateItem();
}