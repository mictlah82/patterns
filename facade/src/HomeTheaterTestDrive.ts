import { Amplifier } from "./Amplifier";
import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { HomeTheaterFacade } from "./HomeTheaterFacade";
import { Screen } from "./Screen";
import { Tuner } from "./Tunner";

const amplifier= new Amplifier();
const tuner= new Tuner();
const cdPlayer= new CdPlayer();
const dvdPlayer= new DvdPlayer();
const screen= new Screen();
const homeTheater = new HomeTheaterFacade(amplifier, tuner, cdPlayer, dvdPlayer, screen);
homeTheater.watchMovie("Interestelar.");
homeTheater.endMovie();