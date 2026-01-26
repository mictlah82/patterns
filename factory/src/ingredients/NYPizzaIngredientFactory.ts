import PizzaIngredientFactory from "./PizzaIngredientFactory";

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): string {
    return "Thin Crust Dough";
  }
  public createSauce(): string {
    return "this is a marinara sauce";
  }
  public createCheese(): string {
    return "this is a reggiano cheese";
  }
  public createVeggies(): string[] {
    const veggies = ["Garlic", "Onion", "Mushroom", "RedPepper"];
    return veggies;
  }
  public createPepperoni(): string {
    return "This is a pepperoni";
  }
  public createClam(): string {
    return "This is a Fresh clam";
  }

}

export default NYPizzaIngredientFactory;