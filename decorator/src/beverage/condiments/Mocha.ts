import { Beverage } from "../Beverage";
import CondimentDecorator from "./CondimentDecorator";

class Mocha extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost(): number {
    let cost = 0;
    switch(this.beverage.getSize()){
      case "small": cost = 0.20; break;
      case "medium": cost = 0.25; break;
      case "large": cost = 0.30;
    }    
    return cost + this.beverage.cost();
  }
}
export default Mocha;