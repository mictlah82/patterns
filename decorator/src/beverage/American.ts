import { Beverage, Size } from './Beverage';

class American extends Beverage {
  constructor(size: Size) {
    super();
    this.size = size;
    this.description = 'American ' + this.getSize();
  }

  cost(): number {
    switch (this.getSize()) {
      case 'TALL':
        return 1.99;
      case 'GRANDE':
        return 2.49;
      case 'VENTI':
        return 2.99;
      default:
        return 1.99;
    }
  }
}

export default American;