import Beverage from "./Beverage";

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Expresso';
  }

  public cost(): number {
    return 1.99;
  }
}
export default Espresso;