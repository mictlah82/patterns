import Beverage from './Beverage';

class American extends Beverage {
  constructor() {
    super();
    this.description = 'American';
  }

  cost(): number {
    return 1.05;
  }
}

export default American;