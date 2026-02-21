import { MenuItem } from "./MenuItem";
// import { Iterator } from "./spec/Iterator";

export class PancakeHouseIterator implements Iterator<MenuItem>{
  private pos:number = 0;
  constructor(
    private items: Set<MenuItem>,
  ){}
  public hasNext(){
    return this.pos < this.items.size
  }
  public next():IteratorResult<MenuItem>{
    const ite = this.items.values();
    let indx = 0;
    while( indx < this.pos){
      ite.next();
      indx++;
    }
    const value = ite.next();
    this.pos = this.pos + 1;
    return value;
  }
  
}