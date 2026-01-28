import CondimentDecorator from './CondimentDecorator';
import { Beverage } from '../Beverage';

class Soy extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost(): number {
    let cost = 0;
    switch(this.beverage.getSize()){
      case "small": cost = 0.11; break;
      case "medium": cost = 0.16; break;
      case "large": cost = 0.21;
    }

    return this.beverage.cost() + cost;
  }
}

export default Soy;