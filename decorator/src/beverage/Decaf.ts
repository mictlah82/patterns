import { Beverage, SizeType } from "./Beverage";

class Decaf extends Beverage {
  constructor(size: SizeType) {
    super();
    this.size = size;
    this.description = 'Decaf ' + this.getSize();
  }

  public cost(): number {
    let cost = 0;
    switch (this.getSize()) {
      case 'small': cost = 0.95; break;
      case 'medium': cost = 1.05; break;
      case 'large': cost = 1.15;
    }
    return cost;
  }
}
export default Decaf;