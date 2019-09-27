export class Sulfuras {
  private sellIn: number;
  private quality: number;
  private ZERO_DAYS = 0;


  constructor(sellIn: number, quality: number ){
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateState(){
    this.sellIn--;
    if (this.sellIn < this.ZERO_DAYS) {
      this.sellIn = 0;
    }
    return 'Sulfuras sellIn = ' + this.sellIn + ' quality = ' + this.quality; 
     
  }
}