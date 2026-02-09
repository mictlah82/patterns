import GarageDoor from "../devices/GarageDoor";
import Light from "../devices/Light";
import { Command } from "../interfaces/Command";

class GarageDoorOnCommand implements Command {
  constructor(
    private garageDoor: GarageDoor,
    private light: Light,
  ){}

  public execute(): void {
    this.garageDoor.open();
    this.light.on();
  }
  public undo(){
    this.light.off();
    this.garageDoor.close();
  }
}
export {GarageDoorOnCommand}