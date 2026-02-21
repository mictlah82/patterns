import { MenuItem } from "./MenuItem";
import { PancakeHouseIterator } from "./PancajeHouseIterator";
// import { Iterator } from "./spec/Iterator";

export class PancakeHouseMenu {
  constructor(
    private menuItems:Set<MenuItem> = new Set(),
  ){
    this.addItem('K&B Pancake Breakfast',
      'Pancakes with scrambled eggs and toast',
      true,
      2.99);
    this.addItem('Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      3.49);
    this.addItem('Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.59);
    this.addItem('Wafles',
      'Wafles, with your choice of blueberries or strawberries',
      true,
      3.59);
  }

  public addItem(name:string, description:string,vegetarian:boolean,price:number){
    const menuItem = new MenuItem(name,description,vegetarian,price);
    this.menuItems.add(menuItem);
  }
  public createIterator():Iterator<MenuItem>{
    return new PancakeHouseIterator(this.menuItems);
  }  
}