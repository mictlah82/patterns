import Beverage from "./Beverage";

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  public cost(): number {
    return .89;
  }
}