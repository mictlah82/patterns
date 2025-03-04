import American from "./beverage/American";
import Decaf from "./beverage/Decaf";
import Espresso from "./beverage/Espresso";
import Milk from "./beverage/condiments/Milk";
import Mocha from "./beverage/condiments/Mocha";
import Whip from "./beverage/condiments/Whip";
import MediumSize from "./beverage/sizes/MediumSize";
import SmallSize from "./beverage/sizes/SmallSize";

let beverage = new American('TALL');
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2 = new Espresso('GRANDE');
beverage2 = new SmallSize(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

let beverage3 = new Decaf('VENTI');
beverage3 = new MediumSize(beverage3);
beverage3 = new Milk(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());