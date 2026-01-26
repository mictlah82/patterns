import PizzaIngredientFactory from "./PizzaIngredientFactory";

class CaliforniaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): string {
    return "Thin Dough";
  }
  public createSauce(): string {
    return "this is a spicy sauce";
  }
  public createCheese(): string {
    return "this is a White cheese";
  }
  public createVeggies(): string[] {
    const veggies = ["Garlic", "Onion", "Mushroom", "RedPepper"];
    return veggies;
  }
  public createPepperoni(): string {
    return "This is a pepperoni";
  }
  public createClam(): string {
    return "This is a Mix clam";
  }
}

export default CaliforniaIngredientFactory;