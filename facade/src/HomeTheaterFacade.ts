import { Amplifier } from "./Amplifier";
import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { Screen } from "./Screen";
import { Tuner } from "./Tunner";

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private tuner: Tuner,
    private cdPlayer: CdPlayer,
    private dvdPlayer: DvdPlayer,
    private screen: Screen,
  ){}

  public watchMovie(movie: string){
    this.amplifier.on();
    this.tuner.on();
    this.screen.on();
    this.dvdPlayer.on();
    this.dvdPlayer.setDvd(movie);
    this.dvdPlayer.play();
  }
  public endMovie(){
    this.dvdPlayer.stop();
    this.dvdPlayer.off();
    this.cdPlayer.off();
    this.tuner.off();
    this.amplifier.off();
    this.screen.off();
  }
}

export {HomeTheaterFacade}