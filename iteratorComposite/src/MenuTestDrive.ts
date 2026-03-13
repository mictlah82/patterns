import { CafeMenu } from "./CafeMenu";
import { DinerMenu } from "./DinerMenu";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { MenuComponent } from "./spec/MenuComponent";
import { Waitress } from "./Waitress";

function addItem(array:MenuComponent,iterator:Iterator<MenuItem>){
   let item = iterator.next();
   while(item && item.value){
    array.add(item.value);
    item = iterator.next();
   }
}

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast');
const dinerMenu = new Menu('DINER MENU','Lunch');
const cafeMenu = new Menu('CAFE MENU', 'Diner');
const desertMenu = new Menu('DESSERT MENU','Dessert of curse!');

const allMenus = new Menu('ALL MENUS','All menus combined');

const pancakeMenuItems = new PancakeHouseMenu();
const dinerMenuItems = new DinerMenu();
const cafeMenuItems = new CafeMenu();

addItem(pancakeHouseMenu,pancakeMenuItems.createIterator());
addItem(dinerMenu,dinerMenuItems.createIterator());
addItem(cafeMenu,cafeMenuItems.createIterator());


desertMenu.add(new MenuItem('Apple Pie',
  'Apple pie with a flakey crust, topped with vanilla iceScream', true, 1.59));

dinerMenu.add(desertMenu);
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);

const waitress = new Waitress(allMenus);

waitress.printMenu();