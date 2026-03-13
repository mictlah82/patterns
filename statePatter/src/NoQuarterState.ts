import { GumballMachine, STATES } from "./GumballMachine";
import { State } from "./spec/State";

export class NoQuarterState implements State {
  constructor(
    private gumballMachine: GumballMachine,
  ) { }

  public insertQuarter(): void {
    console.log('You insert a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
  public ejectQuarter(): void {
    console.log('Operation not available.');
  }
  public turnCrack(): void {
    console.log('Operation not available.');
  }
  public dispense(): void {
    console.log('Operation not available.');
  }
  public refill(n:number): void {
    console.log('returning quarter.');
  }
}