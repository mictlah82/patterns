import SizeDecorator from './SizeDecorator';
import { Beverage } from '../Beverage';

class LargeSize extends SizeDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Large Size';
  }

  public cost(): number {
    return this.beverage.cost() + 0.20;
  }
}

export default LargeSize;