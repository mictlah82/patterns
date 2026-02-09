import Stereo from "../devices/Stereo";
import { Command } from "../interfaces/Command";

class StereoOnCommand implements Command{
  constructor(
    private stereo:Stereo,
  ){}
  public execute(): void {
    this.stereo.on();
  }
  public undo():void{
    this.stereo.off();
  }
}

export {StereoOnCommand};