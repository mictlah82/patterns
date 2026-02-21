import { DinerMenu } from "./DinerMenu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
// import { Iterator }  from './spec/Iterator';

export class Waitress {
  constructor(
    private pancakeHouseMenu:PancakeHouseMenu,
    private dinerMenu: DinerMenu,
  ){}
  public printMenu():void{
    const pancakeIterator: Iterator<MenuItem> = this.pancakeHouseMenu.createIterator();
    const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();
    console.log('----- MENU -----');
    this.printItems(pancakeIterator);
    console.log('----- ---- -----');
    this.printItems(dinerIterator);
  }

  public printItems(iterator:Iterator<MenuItem>){
    let item = iterator.next().value;
    while(item){
      console.log(item?.getName(),item?.getDescription(),item?.isVegetarian(),item?.getPrice());
      item = iterator.next().value;
    }
  }
}