interface PizzaIngredientFactory {
  createDough(): string;
  createSauce(): string;
  createCheese(): string;
  createVeggies(): string[];
  createPepperoni(): string;
  createClam(): string;
}

export default PizzaIngredientFactory;