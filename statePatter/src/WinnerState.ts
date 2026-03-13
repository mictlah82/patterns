import { GumballMachine } from "./GumballMachine";
import { State } from "./spec/State";

export class WinnerState implements State{
  constructor(
    private gumballMachine: GumballMachine
  ){}
  public insertQuarter(): void {
    console.log("Operation not allowed");
  }
  public turnCrack(): void {
    console.log("Operation not allowed");
  }
  public ejectQuarter(): void {
    console.log("Operation not allowed");
  }
  public dispense(): void {
    console.log('YOU ARE A WINNER! You get two gumballs for your quarter.');
    this.gumballMachine.releaseBall();
    if(this.gumballMachine.getNumberGumball() === 0){
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }else{
      this.gumballMachine.releaseBall();
      if(this.gumballMachine.getNumberGumball() > 0){
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('Oops!, out of gumballs!');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
  public refill(n:number): void {
    console.log('returning quarter.');
  }
}