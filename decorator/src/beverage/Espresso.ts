import { Beverage, SizeType } from "./Beverage";

class Espresso extends Beverage {
  constructor(size: SizeType) {
    super();
    this.size = size;
    this.description = 'Expresso ' + this.getSize();
  }

  public cost(): number {
    let  cost = 0;
    switch (this.getSize()) {
      case 'small': cost = 0.91; break;
      case 'medium': cost = 1.01; break;
      case 'large': cost = 1.11;
    }
    return cost;
  }
}
export default Espresso;