import { CaffeineBeverage } from "./CaffeineBeverage";

export abstract class CaffeineBeverageWithHook extends CaffeineBeverage{
  public prepareRecipe():void{
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments())
    this.addCondiments();
  }

  public customerWantsCondiments (): boolean{
    return true;
  }
}