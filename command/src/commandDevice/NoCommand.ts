import { Command } from "../interfaces/Command";

class NoCommand implements Command{
  public execute(): void {
    console.log('No command.');    
  }
  public undo():void{
    console.log('No command.');
  }
}

export default NoCommand;