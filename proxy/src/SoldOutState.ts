import { GumballMachine } from "./GumballMachine";
import { State } from "./spec/State";

export class SoldOutState implements State {
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
		console.log('Operation not available.');
	}
	public refill(numberGumballs: number):void{
		this.gumballMachine.putGumballs(numberGumballs);
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
}