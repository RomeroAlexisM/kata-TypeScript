import { Item } from "./Item";
import { AgedBrie } from "./AgedBrie";
import { BackstagePassest } from "./BackstagePasses";
import { Conjured } from "./Conjured";
import { Sulfuras } from "./Sulfuras";
import { DefaultItem } from "./DefaultItem";

export class GildedRose {
  private items: Array<Item>;

  constructor(items = [] as Array<Item>){
    this.items = items;
  }
 
  updateItem() {
    for (let index = 0; index < this.items.length; index++) {
     this.items[index].sellIn = this.updateSellIn(this.items[index].sellIn);
     this.items[index].quality = this.selectItem(this.items[index].name, this.items[index].sellIn, this.items[index].quality);     
    }
  }

  updateSellIn(sellIn: number){
    if (sellIn > 0) {
      sellIn--;
    }else {
      sellIn = 0;
    }
    return sellIn
  }

  selectItem(name: string, sellIn: number, quality: number) {   
    switch (name) {
      case 'AgedBrie':
        var agedBrie = new AgedBrie(sellIn, quality);        
        return agedBrie.updateQuality();
      case 'BackstagePasses':
        var backstagePassest = new BackstagePassest(sellIn, quality);
        return backstagePassest.updateQuality();
      case 'Conjured':
        var conjured = new Conjured(sellIn, quality);    
        return conjured.updateQuality();
      case 'Sulfuras':
        var sulfuras = new Sulfuras(quality);
        return sulfuras.updateState();
      default:
        var defaultItem = new DefaultItem(name, sellIn, quality);
        return defaultItem.updateQuality()
    }
  }
}