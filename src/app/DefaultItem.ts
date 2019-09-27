import { Quality } from "./Quality";
import { DecreaseQuality } from "./DecreaseQuality";

export class DefaultItem implements Quality, DecreaseQuality{
  private sellIn: number;
  private quality: number;
  private name : string;
  private MIN_QUALITY = 0;
  private ZERO_DAYS = 0;
  
  constructor(name: string, sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
    this.name = name;
  }
  updateQuality(){
    this.sellIn--;
    if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
      this.decreaseQuality(1);
    }else {
      this.sellIn = 0;
      this.decreaseQuality(2);
    }
    return  this.name +' sellIn = ' + this.sellIn + ' quality = ' + this.quality; 
  }

  decreaseQuality(deratingValue: number) {
    this.quality = this.quality - deratingValue;    
  }
}