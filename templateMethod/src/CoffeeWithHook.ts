import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";

export class CoffeeWithHook extends CaffeineBeverageWithHook{
  constructor(
    private withCondiments:boolean=false
  ){
    super();
  }

  public brew():void{
    console.log('brewing coffee through filter');
  }
  public addCondiments():void{
    console.log('Adding sugar and milk.');
  }
  public customerWantsCondiments(): boolean {
    return this.withCondiments;
  }
  public setWithCondimets(condiments: boolean){
    this.withCondiments = condiments;
  }
}