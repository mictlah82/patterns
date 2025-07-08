import NYPizzaIngredientFactory from "./ingredients/NYPizzaIngredientFactory";
import PizzaIngredientFactory from "./ingredients/PizzaIngredientFactory";
import CheesePizza from "./pizzas/CheesePizza";
import ClamPizza from "./pizzas/ClamPizza";
import Pizza from "./pizzas/Pizza";
import VeggiePizza from "./pizzas/VeggiePizza";
import PizzaStore from "./PizzaStore"

class NYPizzaStore extends PizzaStore {

  public createPizza(type: string): Pizza {
    let pizza: Pizza;
    let ingredients: PizzaIngredientFactory = new NYPizzaIngredientFactory();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredients);
        pizza.setName('NY Style Cheese Pizza');
        break;
      case 'veggie':
        pizza = new VeggiePizza(ingredients);
        pizza.setName('NY Style Veggie Pizza');
        break;
      case 'clam':
        pizza = new ClamPizza(ingredients);
        pizza.setName('NY Style Clam Pizza');
        break;
      case 'pepperoni':
        pizza = new CheesePizza(ingredients);
        pizza.setName('NY Style Pepperoni Pizza');
        break;
      default:
        pizza = new CheesePizza(ingredients);
        pizza.setName('NY Style Cheese Pizza');
   }

    return pizza;
  }
}

export default NYPizzaStore;