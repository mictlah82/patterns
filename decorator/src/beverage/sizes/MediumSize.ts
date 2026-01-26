import { Beverage } from "../Beverage";
import SizeDecorator from "./SizeDecorator";

class MediumSize extends SizeDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public cost(): number {
    return this.beverage.cost() + .15;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Medium';
  }
}

export default MediumSize;