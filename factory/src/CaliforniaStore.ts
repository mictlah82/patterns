import CaliforniaIngredientFactory from "./ingredients/CaliforniaIngredientFactory";
import PizzaIngredientFactory from "./ingredients/PizzaIngredientFactory";
import CheesePizza from "./pizzas/CheesePizza";
import ClamPizza from "./pizzas/ClamPizza";
import PepperoniPizza from "./pizzas/PepperoniPizza";
import Pizza from "./pizzas/Pizza";
import VeggiePizza from "./pizzas/VeggiePizza";
import PizzaStore from "./PizzaStore";

class CaliforniaPizza extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza : Pizza;
    let ingredients: PizzaIngredientFactory = new CaliforniaIngredientFactory();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredients);
        pizza.setName('California Style Cheese Pizza');
        break;
      case 'veggie':
        pizza = new VeggiePizza(ingredients);
        pizza.setName('California Style Veggie Pizza');
        break;
      case 'clam':
        pizza = new ClamPizza(ingredients);
        pizza.setName('California Style Clam Pizza');
        break;
      case 'pepperoni':
        pizza = new PepperoniPizza(ingredients);
        pizza.setName('California Style Pepperoni Pizza');
        break;        
      default:
        pizza = new CheesePizza(ingredients);
        pizza.setName('California Style Cheese Pizza');
        break;
    }
    return pizza;
  }
}

export default CaliforniaPizza;