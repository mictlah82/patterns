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
    return .20 + this.beverage.cost();
  }
}
export default Mocha;