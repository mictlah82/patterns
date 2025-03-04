import { Beverage, Size } from "./Beverage";

class Espresso extends Beverage {
  constructor(size: Size) {
    super();
    this.size = size;
    this.description = 'Expresso ' + this.getSize();
  }

  public cost(): number {
    switch (this.getSize()) {
      case 'TALL':
        return 1.91;
      case 'GRANDE':
        return 2.41;
      case 'VENTI':
        return 2.91;
      default:
        return 1.91;
    }
  }
}
export default Espresso;