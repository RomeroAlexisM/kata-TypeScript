import { Quality } from "./Quality";
import { DecreaseQuality } from "./DecreaseQuality";

export class Conjured implements Quality, DecreaseQuality{
  private sellIn: number;
  private quality: number;
  private MIN_QUALITY = 0;
  private ZERO_DAYS = 0;
  
  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    this.sellIn--;
    if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
      this.decreaseQuality(2);
    }else {
      this.sellIn = 0;
      this.decreaseQuality(2);
    }
    return 'Conjured sellIn = ' + this.sellIn + ' quality = ' + this.quality; 
  }

  decreaseQuality(deratingValue: number) {
    this.quality = this.quality - deratingValue;    
  }
}