import { Item } from "./Item";
import { AgedBrie } from "./AgedBrie";
import { BackstagePassest } from "./BackstagePasses";
import { Conjured } from "./Conjured";
import { Sulfuras } from "./Sulfuras";
import { DefaultItem } from "./DefaultItem";

export class GildeRose {
  private items: Array<Item>;

  constructor(items = [] as Array<Item>){
    this.items = items;
  }

  selectItem(name: string, sellIn: number, quality: number){
    switch (name) {
      case 'AgedBrie':
        var agedBrie = new AgedBrie(sellIn, quality);        
        console.log(agedBrie.updateQuality());
        break;
      case 'BackstagePasses':
        var backstagePassest = new BackstagePassest(sellIn, quality);
        console.log(backstagePassest.updateQuality());
        break;
      case 'Conjured':
        var conjured = new Conjured(sellIn, quality);    
        console.log(conjured.updateQuality());
      break;
      case 'Sulfuras':
        var sulfuras = new Sulfuras(sellIn, quality);
        console.log(sulfuras.updateState());
        break;
      default:
        var defaultItem = new DefaultItem(name, sellIn, quality);
        console.log(defaultItem.updateQuality());
        
        break;
    }
  }
}