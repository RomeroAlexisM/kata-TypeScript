import { Quality } from "./Quality";
import { IncreaseQuality } from "./IncreaseQuality";
import { DecreaseQuality } from "./DecreaseQuality";

export class BackstagePassest implements Quality, IncreaseQuality, DecreaseQuality{

  private sellIn: number;
  private quality: number;
  private MAX_QUALITY = 50;
  private MIN_QUALITY = 0;
  private TEN_DAYS = 10;
  private FIVE_DAYS = 5;
  private ZERO_DAYS = 0;
  private ONE_QUALITY_UNITS = 1;
  private TWO_QUALITY_UNITS = 2;
  private THREE_QUALITY_UNITS = 3;


  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    if (this.sellIn >= this.ZERO_DAYS && this.quality > this.MIN_QUALITY) {
      if (this.sellIn <= this.TEN_DAYS) {
        if (this.sellIn <= this.FIVE_DAYS) {
         this.increaseQuality(this.THREE_QUALITY_UNITS);
        }else {
          this.increaseQuality(this.TWO_QUALITY_UNITS);
        }
      }else {
        this.increaseQuality(this.ONE_QUALITY_UNITS);
      }
    }else {
      this.decreaseQuality(this.quality);
    } 

  return this.quality; 
  }

  increaseQuality(incrementValue: number){
    if (this.quality < this.MAX_QUALITY) {
      this.quality = this.quality + incrementValue;      
    }
  }
  decreaseQuality(deratingValue: number) {
    this.quality = this.quality - deratingValue;
  }
}