import { Beverage, SizeType } from "./Beverage";

class DarkRoast extends Beverage {
  constructor(size: SizeType) {
    super();
    this.size = size;
    this.description = 'Dark Roast Coffee ' + this.getSize();
  }

  public cost():number {
    let cost=0;
    switch (this.getSize()) {
      case 'small':
        cost = 0.89;
      case 'medium':
        cost = 1.99;
      case 'large':
        cost = 1.09;
    }
    return cost;
  }
}

export default DarkRoast;