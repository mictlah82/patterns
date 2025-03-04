import CondimentDecorator from './CondimentDecorator';
import Beverage from '../Beverage';

class Milk extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.12;
  }
}

export default Milk;