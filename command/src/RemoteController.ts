import NoCommand from "./commandDevice/NoCommand";
import { Command } from "./interfaces/Command";

class RemoteController {
  private onCommands: Array<Command> = new Array(7);
  private offCommands: Array<Command> = new Array(7);

  RemoteController(){
    for(let i=0; i < 7; i++){
      this.onCommands[i]= new NoCommand();
      this.offCommands[i]= new NoCommand();
    }
  }
  
  public setCommand(slot: number, onCommand: Command, offCommand: Command){
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number){
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number){
    this.offCommands[slot].execute();
  }

  public toString(){
    for(let i=0; i<this.onCommands.length; i++){
      console.log(`slot [${i}] ${(this.onCommands[i])}`)
    }
  }
}