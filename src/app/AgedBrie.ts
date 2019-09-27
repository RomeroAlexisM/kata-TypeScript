import { Quality } from "./Quality";
import { IncreaseQuality } from "./IncreaseQuality";

export class AgedBrie implements Quality,IncreaseQuality{
  private sellIn: number;
  private quality: number;
  private MAX_QUALITY = 50;
  private ZERO_DAYS = 0;

  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    this.sellIn--;
    if (this.sellIn > this.ZERO_DAYS) {
      this.increaseQuality(1)
    }else {
      this.sellIn = 0;
      this.increaseQuality(1)
    }       

    return 'AgedBrie sellIn = ' + this.sellIn + ' quality = ' + this.quality; 

  }

  increaseQuality(incrementValue: number) {
    if (this.quality < this.MAX_QUALITY) {
      this.quality = this.quality + incrementValue;      
    }
  }
}