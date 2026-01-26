import CeilingFan from "../devices/CeilingFan";
import { Command } from "../interfaces/Command";

class CeilingFanOnCommand implements Command{
  private ceilingFan!: CeilingFan;

  CeilingFanOnCommand(ceilingFan: CeilingFan){
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.on();
  }
}

export default CeilingFanOnCommand;