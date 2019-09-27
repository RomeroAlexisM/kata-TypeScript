import { Quality } from "./Quality";
import { IncreaseQuality } from "./IncreaseQuality";

export class AgedBrie implements Quality,IncreaseQuality{
  private sellIn: number;
  private quality: number;
  private MAX_QUALITY = 50;
  private ONE_QUALITY_UNITS = 1;

  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    this.increaseQuality(this.ONE_QUALITY_UNITS);
    return this.quality; 
  }

  increaseQuality(incrementValue: number) {
    if (this.quality < this.MAX_QUALITY) {
      this.quality = this.quality + incrementValue;      
    }
  }
}