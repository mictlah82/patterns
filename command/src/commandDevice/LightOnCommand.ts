import Light from "../devices/Light";
import { Command } from "../interfaces/Command";

class LightOnCommand implements Command{
  private light!: Light;
  LightOnCommand(light: Light){
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}
export default LightOnCommand;

$D0ck3r.C00p3r.H0m3$