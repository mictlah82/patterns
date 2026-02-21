import { DinerMenuIterator } from "./DinerMenuIterator";
import { MenuItem } from "./MenuItem";
// import { Iterator } from "./spec/Iterator";

const MAX_ITEMS = 6;
export class DinerMenu {
  private indx:number = 0;
  constructor(
    private menuItems:Array<MenuItem>=[]
  ){
    this.addItem('Vegetarian BLT',
      '(Fakin\') Bacon with lettuce & tomato on whole wheat',
      true,
      2.99);
    this.addItem('BLT',
      'Bacon with lettuce & tomato on whole wheat',
      false,
      2.99);
    this.addItem('Soup of the day',
      'Soup of the day,with a side of potato salad',
      false,
      3.99);
    this.addItem('Hotdog',
      'A hot dog, with saurkraut, relish, onions, topped with cheese',
    false, 3.05);
  }
  public addItem(name:string, description:string,vegetarian:boolean,price:number){
    if (this.indx<MAX_ITEMS){
      const menuItem = new MenuItem(name,description,vegetarian,price);
      this.menuItems[this.indx]= menuItem;
      this.indx++;
    } else {
      console.log('Sorry, menu is full!, Can\'t add item to menu');
    }
  }
  public createIterator():Iterator<MenuItem>{
    return new DinerMenuIterator(this.menuItems);
  }
}