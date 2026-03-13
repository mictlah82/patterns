import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage{
  public brew():void{
    console.log('steeping tea bag');
  }
  public addCondiments():void{
    console.log('Adding lemon.');
  }  
}