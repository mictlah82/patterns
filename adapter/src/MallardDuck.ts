import { Duck } from './Duck';

export class MallardDuck implements Duck {
  public quack(): void {
    console.log('Quack');
  }

  public fly(): void {
    console.log("I'm flying");
  }
}
