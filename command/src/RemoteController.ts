import NoCommand from "./commandDevice/NoCommand";
import { Command } from "./interfaces/Command";

const sizeSlot = 7;
class RemoteController {

  constructor(
    private noCommand: NoCommand,
    private onCommands: Array<Command> = new Array(sizeSlot).fill(noCommand),
    private offCommands: Array<Command> = new Array(sizeSlot).fill(noCommand),
    private lastCommand = noCommand,
  ){}
  
  public setCommand(slot: number, onCommand: Command, offCommand: Command){
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number){
    if (slot >= 0 && slot < sizeSlot ){
      this.onCommands[slot].execute();
      this.lastCommand = this.onCommands[slot];
    } else {
      throw new Error('Slot not allowed.');
    }
  }

  public offButtonWasPushed(slot: number){
    if (slot >=0 && slot < sizeSlot){
      this.offCommands[slot].execute();
      this.lastCommand = this.offCommands[slot];
    } else {
      throw new Error('Slot not allowed.');
    }
  }

  public undoButtonWasPushed(){
    this.lastCommand.undo();
  }

  public toString(){
    for(let i=0; i<this.onCommands.length; i++){
      console.log(`slot [${i}] ${(this.onCommands[i])}`)
    }
  }
}

export {RemoteController};