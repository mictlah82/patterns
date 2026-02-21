import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage{
  public brew():void{
    console.log('brewing coffee through filter');
  }
  public addCondiments():void{
    console.log('Adding sugar and milk.');
  }
}