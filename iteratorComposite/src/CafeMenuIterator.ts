import { MenuItem } from "./MenuItem";

export class CafeMenuIterator implements Iterator<MenuItem, MenuItem>{
  private pos = 0;
  constructor(
    private menuItems:Array<MenuItem>
  ){}
  public next(): IteratorResult<MenuItem> {    
    let item:MenuItem|undefined=undefined;
    if(this.pos < this.menuItems.length){
      item = this.menuItems[this.pos];
      this.pos = this.pos + 1;
    }
    return {value:item , done: true};
  }

}