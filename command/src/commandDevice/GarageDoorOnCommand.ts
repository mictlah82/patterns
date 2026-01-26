import GarageDoor from "../devices/GarageDoor";
import { Command } from "../interfaces/Command";

class GarageDoorOnCommand implements Command {
  private garageDoor!: GarageDoor;

  GarageDorrOnCommand(garageDoor: GarageDoor){
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.on();
  }
}