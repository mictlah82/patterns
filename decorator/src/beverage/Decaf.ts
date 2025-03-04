import { Beverage, Size } from "./Beverage";

class Decaf extends Beverage {
  constructor(size: Size) {
    super();
    this.size = size;
    this.description = 'Decaf ' + this.getSize();
  }

  cost(): number {
    switch (this.getSize()) {
      case 'TALL':
        return 1.95;
      case 'GRANDE':
        return 2.45;
      case 'VENTI':
        return 2.95;
      default:
        return 1.95;
    }
  }
}
export default Decaf;