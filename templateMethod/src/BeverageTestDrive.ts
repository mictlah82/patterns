import { CoffeeWithHook } from "./CoffeeWithHook";

const coffeeWithHook = new CoffeeWithHook(true);
coffeeWithHook.prepareRecipe();

coffeeWithHook.setWithCondimets(false);
coffeeWithHook.prepareRecipe();
