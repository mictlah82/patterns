import Beverage from "../Beverage";

abstract class SizeDecorator extends Beverage {
  public abstract getDescription(): string;
}

export default SizeDecorator;