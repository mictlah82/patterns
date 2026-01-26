import PizzaIngredientFactory from "./PizzaIngredientFactory";

class ChicagoIngredientFactory implements PizzaIngredientFactory {
  public createDough(): string {
    return "Thick Crust Dough";
  }
  public createSauce(): string {
    return "this is a Plum Tomato sauce";
  }
  public createCheese(): string {
    return "this is a Mozzarella cheese";
  }
  public createVeggies(): string[] {
    const veggies = ["Garlic", "Onion", "Mushroom", "RedPepper"];
    return veggies;
  }
  public createPepperoni(): string {
    return "This is a pepperoni";
  }
  public createClam(): string {
    return "This is a Frozen clam";
  }
}

export default ChicagoIngredientFactory;