import { MenuComponent } from "./spec/MenuComponent";
// import { Iterator }  from './spec/Iterator';

export class Waitress {
  constructor(
    private allMenus:MenuComponent,
  ){}
  public printMenu():void{
    this.allMenus.print();
  }
}