import CeilingFan from "../devices/CeilingFan";
import { Command } from "../interfaces/Command";

class CeilingFanOnCommand implements Command{
  constructor(
    private ceilingFan: CeilingFan,
  ){}

  public execute(): void {
    this.ceilingFan.on();
  }
  public undo():void{
    this.ceilingFan.off();
  }
}

export default CeilingFanOnCommand;