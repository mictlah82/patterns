import CeilingFan from "../devices/CeilingFan";
import { Command } from "../interfaces/Command";

class CeilingFanOffCommand implements Command{
  private ceilingFan!: CeilingFan;

  CeilingFanOffCommand(ceilingFan: CeilingFan){
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.off();    
  }

}

export default CeilingFanOffCommand;