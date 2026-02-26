import { CafeMenuIterator } from "./CafeMenuIterator";
import { MenuItem } from "./MenuItem";

export class CafeMenu{
  constructor(
    private menuItems:Array<MenuItem> = [],
  ){
    this.addItem('Veggie Burger and Air Fries',
      'Veggie burger on a whole wheat bun, lettuce, tomato and fries', true, 3.99
    );
    this.addItem('Soap of the day',
      'A cup of the soup of the day, with a side salad', false, 3.69
    );
    this.addItem('Burrito',
      'A large burrito, with whole pinto beans, salad and guacamole', true, 4.29
    );
  }
  public addItem(name:string, description:string, vegetarian:boolean, price:number){
    const newItem = new MenuItem(name,description,vegetarian,price);
    this.menuItems.push(newItem);
  }

  public getItems():Array<MenuItem>{
    return this.menuItems;
  }
  public createIterator(){
    return new CafeMenuIterator(this.menuItems);
  }
}