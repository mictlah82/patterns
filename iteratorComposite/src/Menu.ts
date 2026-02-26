import { MenuComponent } from "./spec/MenuComponent";

export class Menu extends MenuComponent{
  private menuComponents:Array<MenuComponent> = new Array();
  private iterator:Iterator<any>|null = null;

  constructor(
    private name:string,
    private description:string,
  ){
   super();
  }
  public add(component: MenuComponent):void{
   this.menuComponents.push(component);
  }
  public remove(component: MenuComponent){
   this.menuComponents = this.menuComponents.filter(comp=>comp!=component);
  }
  public getChild(indx: number):MenuComponent{
   return this.menuComponents[indx];
  }
  public getName():string{
   return this.name;
  }
  public getDescription():string{
   return this.description;
  }
  public print():void{
   console.log('--------',this.getName(), ' -- ', this.getDescription(), '--------');
   for(const component of this.menuComponents){
     component.print();
   }
  }
}