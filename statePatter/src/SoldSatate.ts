import { GumballMachine } from "./GumballMachine";
import { State } from "./spec/State";

export class SoldState implements State {
  constructor(
    private gumballMachine: GumballMachine,
  ) { }

  public insertQuarter(): void {
    console.log('Operation not available.');
  }
  public ejectQuarter(): void {
    console.log('Operation not available.');
  }
  public turnCrack(): void {
    console.log('Operation not available.');
  }
  public dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getNumberGumball()>0){
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }else {
      console.log('Ouch!, out of gumballs.');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}