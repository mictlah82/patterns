import { Beverage, SizeType } from './Beverage';

class American extends Beverage {
  constructor(size: SizeType) {
    super();
    this.size = size;
    this.description = 'American ' + this.getSize();
  }

  cost(): number {
    let cost=0;
    switch (this.getSize()) {
      case 'small':
        cost = 1.99;
      case 'medium':
        cost = 1.09;
      case 'large':
        cost = 1.19;
    }
    return cost;
  }
}

export default American;