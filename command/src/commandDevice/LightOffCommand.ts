import Light from "../devices/Light";
import { Command } from "../interfaces/Command";

class LightOffCommand implements Command{
  constructor(
    private light: Light
  ){}

  public execute(): void {
    this.light.off();
  }
  public undo():void{
    this.light.on();
  }
}

export default LightOffCommand;