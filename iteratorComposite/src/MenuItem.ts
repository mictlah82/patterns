export class MenuItem {
  constructor(
    private name: string,
    private description: string,
    private vegetarian: boolean,
    private price: number,
  ){}
  public getName():string{
    return this.name;
  }
  public getDescription():string{
    return this.description;
  }
  public isVegetarian():boolean{
    return this.vegetarian;
  }
  public getPrice():number{
    return this.price;
  }
}