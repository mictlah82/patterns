import Beverage from "../Beverage";
import SizeDecorator from "./SizeDecorator";

class SmallSize extends SizeDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage =  beverage;
  }

  public cost(): number {
    return this.beverage.cost() + .10;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Small';
  }
}

export default SmallSize;