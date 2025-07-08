import PizzaIngredientFactory from "../ingredients/PizzaIngredientFactory";
import Pizza from "./Pizza";

class VeggiePizza extends Pizza {
  ingredientsFactory: PizzaIngredientFactory;

  constructor(ingredients: PizzaIngredientFactory) {
    super();
    this.ingredientsFactory = ingredients;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
    this.veggies = this.ingredientsFactory.createVeggies();
  }
}

export default VeggiePizza;