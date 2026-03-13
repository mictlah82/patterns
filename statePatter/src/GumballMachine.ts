import { HasQuarterState } from "./HasQuarterState";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldSatate";
import { State } from "./spec/State";
import { WinnerState } from "./WinnerState";

export enum STATES {
	SOLD_OUT = 0,
	NO_QUARTER = 1,
	HAS_QUARTER = 2,
	SOLD = 3,
}


export class GumballMachine {
	private state: State;
	private count: number;

	constructor(
		numberGumballs: number,
		private soldOutState = new SoldOutState(this),
		private hasQuarterState = new HasQuarterState(this),
		private noQuarterState = new NoQuarterState(this),
		private soldState = new SoldState(this),
		private winnerState = new WinnerState(this),
	) {
		this.count = numberGumballs;
		if (this.count > 0) {
			this.state = noQuarterState;
		} else {
			this.state = soldOutState;
		}

	}

	public getSoldOutState():State{
		return this.soldOutState;
	}
	public getHasQuarterState(): State{
		return this.hasQuarterState;
	}
	public getNoQuarterState():State{
		return this.noQuarterState;
	}
	public getSoldState():State{
		return this.soldState;
	}
	public getWinnerState():State{
		return this.winnerState;
	}
	public getNumberGumball():number{
		return this.count;
	}

	public insertQuarter():void{
		this.state.insertQuarter();
	}
	public ejectQuarter():void{
		this.state.ejectQuarter();
	}
	public turnCrank(){
		this.state.turnCrack();
	}
	public winner():void{
		this.state.dispense();
	}
	public dispense():void{
		this.state.dispense();
	}

	public setState(state: State):void{
		this.state = state;
	}
	public releaseBall(){
		console.log('A gumball comes rolling out the slot...');
		if(this.count != 0){
			this.count = this.count - 1;
		}
	}
	public putGumballs(numberGumballs: number):void{
		this.count = this.count + numberGumballs;
	}
}
