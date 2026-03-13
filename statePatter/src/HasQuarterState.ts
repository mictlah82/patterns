import { GumballMachine, STATES } from "./GumballMachine";
import { State } from "./spec/State";

export class HasQuarterState implements State {
  constructor(
    private gumballMachine: GumballMachine,
  ) { }

  public insertQuarter(): void {
    console.log('Operation not available.');
  }
  public ejectQuarter(): void {
    console.log('returning quarter.');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  public turnCrack(): void {
    const winner = Math.random()*100;
    if (winner <= 10){
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
      this.gumballMachine.dispense();
    }else{
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
      this.gumballMachine.dispense();
    }
  }
  public dispense(): void {
    console.log('Operation not available.');
  }  
}