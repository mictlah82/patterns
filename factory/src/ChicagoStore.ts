import ChicagoIngredientFactory from "./ingredients/ChicagoIngredientFactory";
import PizzaIngredientFactory from "./ingredients/PizzaIngredientFactory";
import CheesePizza from "./pizzas/CheesePizza";
import ClamPizza from "./pizzas/ClamPizza";
import PepperoniPizza from "./pizzas/PepperoniPizza";
import Pizza from "./pizzas/Pizza";
import VeggiePizza from "./pizzas/VeggiePizza";
import PizzaStore from "./PizzaStore";

class ChicagoStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza: Pizza;
    let ingredients: PizzaIngredientFactory = new ChicagoIngredientFactory();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredients);
        pizza.setName('Chicago Style Cheese Pizza');
        break;
      case 'veggie':
        pizza = new VeggiePizza(ingredients);
        pizza.setName('Chicago Style Veggie Pizza');
        break;
      case 'clam':
        pizza = new ClamPizza(ingredients);
        pizza.setName('Chicago Style Clam Pizza');
        break;
      case 'pepperoni':
        pizza = new PepperoniPizza(ingredients);
        pizza.setName('Chicago Style Pepperoni Pizza');
        break;
      default:
        pizza = new CheesePizza(ingredients);
        pizza.setName('Chicago Style Cheese Pizza');
        break;
    }
    return pizza;
  }
}

export default ChicagoStore;