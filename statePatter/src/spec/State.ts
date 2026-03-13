export interface State {
    insertQuarter():void;
    ejectQuarter():void;
    turnCrack():void;
    dispense():void;
    refill(numberGumballs: number):void;
}