import { Beverage, Size } from "./Beverage";

class DarkRoast extends Beverage {
  constructor(size: Size) {
    super();
    this.size = size;
    this.description = 'Dark Roast Coffee ' + this.getSize();
  }

  cost() {
    switch (this.getSize()) {
      case 'TALL':
        return 1.89;
      case 'GRANDE':
        return 2.39;
      case 'VENTI':
        return 2.89;
      default:
        return 1.89;
    }
  }
}

export default DarkRoast;