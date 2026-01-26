import PizzaIngredientFactory from "../ingredients/PizzaIngredientFactory";

abstract class Pizza {
  protected name: string = '';
  protected dough: string = '';
  protected sauce: string = '';
  protected veggies: string[] = [];
  protected cheese: string = '';
  protected pepperoni: string = '';
  protected clam: string = '';

  // public prepare(): void {
  //   console.log(`Preparing ${this.name}`);
  //   console.log('Tossing dough...');
  //   console.log('Adding sauce...');
  //   console.log('Adding toppings:');
  // }

  abstract prepare(): void;

  public bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  public cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export default Pizza;