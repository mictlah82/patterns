import { MenuItem } from "./MenuItem";
// import { Iterator } from "./spec/Iterator";

export class DinerMenuIterator implements Iterator<MenuItem, MenuItem>{
  private pos = 0;
  constructor(
    private items: Array<MenuItem>,
  ){}
  public hasNext():boolean{
    return this.pos < this.items.length;
  }
  public next():IteratorResult<MenuItem>{
    const ite = this.items[Symbol.iterator]();
    let indx=0;
    while(indx < this.pos){
      ite.next();
      indx++;
    }
    const value = ite.next();
    this.pos = this.pos + 1;
    return  value;
  }
}