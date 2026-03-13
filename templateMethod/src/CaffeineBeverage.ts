export abstract class CaffeineBeverage{
  public prepareRecipe():void{
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
  abstract brew():void;
  abstract addCondiments():void;
  public boilWater():void{
    console.log('boiling water.')
  }
  public pourInCup():void{
    console.log('Pouring in a Cup');
  }
}