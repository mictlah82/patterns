import { NullIterator } from "./NullIterator";
import { MenuComponent } from "./spec/MenuComponent";

export class MenuItem  extends MenuComponent{
  constructor(
    private name: string,
    private description: string,
    private vegetarian: boolean,
    private price: number,
  ){
    super();
  }
  public getName():string{
    return this.name;
  }
  public getDescription():string{
    return this.description;
  }
  public isVegetarian():boolean{
    return this.vegetarian;
  }
  public getPrice():number{
    return this.price;
  }
  public print(){
    console.log("Name:", this.name, " Vegetarian:", this.vegetarian?"(T)":"(F)",
      " Price:", this.price, " Desc:",this.description);
  }
}