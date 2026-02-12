import { Duck } from './Duck';
import { Turkey } from './Turkey';

export class TurkeyAdapter implements Duck {
  constructor(
    private turkey: Turkey) {}

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    // Turkeys fly short distances; simulate longer duck-like flight
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
