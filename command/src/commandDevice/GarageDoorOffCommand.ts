import GarageDoor from "../devices/GarageDoor";
import { Command } from "../interfaces/Command";

class GarageDoorOffCommand implements Command{
  private garageDoor!: GarageDoor;

  GarageDoorOffCommand(garageDoor: GarageDoor){
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.off();
  }
}
export default GarageDoorOffCommand;