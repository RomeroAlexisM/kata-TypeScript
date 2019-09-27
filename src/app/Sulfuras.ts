export class Sulfuras {
  private quality: number;


  constructor(quality: number ){
    this.quality = quality;
  } 

  updateState(){
    return this.quality; 
  }
}