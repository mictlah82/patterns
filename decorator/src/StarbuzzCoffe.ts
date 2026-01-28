import American from "./beverage/American";
import Decaf from "./beverage/Decaf";
import Espresso from "./beverage/Espresso";
import Milk from "./beverage/condiments/Milk";
import Mocha from "./beverage/condiments/Mocha";
import Whip from "./beverage/condiments/Whip";

let beverage = new American('large');
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2 = new Espresso('medium');
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

let beverage3 = new Decaf('small');
beverage3 = new Milk(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());