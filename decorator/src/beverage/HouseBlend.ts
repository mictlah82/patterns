import { Beverage, SizeType } from "./Beverage";

class HouseBlend extends Beverage {
  constructor(size: SizeType) {
    super();
    this.size = size;
    this.description = 'House Blend Coffee ' + this.getSize();
  }

  public cost(): number {
    let cost = 0;
    switch (this.getSize()) {
      case 'small':
        cost = 0.99;
      case 'medium':
        cost = 1.09;
      case 'large':
        cost = 1.19;
    }
    return cost;

  }
}