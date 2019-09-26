import { AgedBrie } from './AgedBrie' 
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
  // prueba(){
  // var prueb1 = new AgedBrie();   
  // prueb1.updateQuality()
  // console.log(this.name);

  // }
}

var prueb1 = new AgedBrie();   
prueb1.updateQuality()