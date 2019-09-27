import { Quality } from "./Quality";
import { DecreaseQuality } from "./DecreaseQuality";

export class Conjured implements Quality, DecreaseQuality{
  private sellIn: number;
  private quality: number;
  private MIN_QUALITY = 0;
  private TWO_QUALITY_UNITS = 2;
  
  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    if (this.quality > this.MIN_QUALITY) {
      this.decreaseQuality(this.TWO_QUALITY_UNITS);
    }
    return this.quality; 
  }

  decreaseQuality(deratingValue: number) {
    this.quality = this.quality - deratingValue;    
  }
}