import CondimentDecorator from './CondimentDecorator';
import { Beverage } from '../Beverage';

class Whip extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost(): number {
    let cost = 0;
    switch(this.beverage.getSize()){
      case "small": cost = 0.17; break;
      case "medium": cost = 0.22; break;
      case "large": cost = 0.27;
    }

    return this.beverage.cost() + cost;
  }
}

export default Whip;