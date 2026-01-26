import Light from "../devices/Light";
import { Command } from "../interfaces/Command";

class LightOffCommand implements Command{
  private light!: Light;

  LightOffCommand(light: Light){
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
}

export default LightOffCommand;