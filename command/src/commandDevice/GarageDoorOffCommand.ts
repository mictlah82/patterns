import GarageDoor from "../devices/GarageDoor";
import Light from "../devices/Light";
import { Command } from "../interfaces/Command";

class GarageDoorOffCommand implements Command{

  constructor(
    private garageDoor: GarageDoor,
    private light: Light,
  ){}

  public execute(): void {
    this.garageDoor.close();
    this.light.off();
  }
  public undo():void{
    this.light.on();
    this.garageDoor.open();
  }
}
export default GarageDoorOffCommand;