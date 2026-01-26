import { Beverage, Size } from "./Beverage";

class HouseBlend extends Beverage {
  constructor(size: Size) {
    super();
    this.size = size;
    this.description = 'House Blend Coffee ' + this.getSize();
  }

  public cost(): number {
    switch (this.getSize()) {
      case 'TALL':
        return 0.99;
      case 'GRANDE':
        return 0.49;
      case 'VENTI':
        return 1.19;
      default:
        return 0.99;
    }

  }
}