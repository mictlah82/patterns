import CeilingFan from "../devices/CeilingFan";
import { Command } from "../interfaces/Command";

class CeilingFanOffCommand implements Command{
  constructor(
    private ceilingFan: CeilingFan
  ){}

  public execute(): void {
    this.ceilingFan.off();    
  }
  public undo():void{
    this.ceilingFan.on();
  }

}

export default CeilingFanOffCommand;