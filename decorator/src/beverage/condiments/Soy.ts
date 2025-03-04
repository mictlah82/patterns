import CondimentDecorator from './CondimentDecorator';
import { Beverage } from '../Beverage';

class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  cost(): number {
    return this.beverage.cost() + 0.11;
  }
}

export default Soy;