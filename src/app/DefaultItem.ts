import { Quality } from "./Quality";
import { DecreaseQuality } from "./DecreaseQuality";

export class DefaultItem implements Quality, DecreaseQuality{
  private sellIn: number;
  private quality: number;
  private name : string;
  private MIN_QUALITY = 0;
  private ZERO_DAYS = 0;
  private ONE_QUALITY_UNITS = 1;
  private TWO_QUALITY_UNITS = 2;

  constructor(name: string, sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
    this.name = name;
  }
  updateQuality(){
    if (this.sellIn > this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
      this.decreaseQuality(this.ONE_QUALITY_UNITS);
    }else {
      this.decreaseQuality(this.TWO_QUALITY_UNITS);
    }
    return this.quality; 
  }

  decreaseQuality(deratingValue: number) {
    if (this.quality > this.MIN_QUALITY) {
      this.quality = this.quality - deratingValue;          
    }
  }
}