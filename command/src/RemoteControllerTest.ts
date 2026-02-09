import CeilingFanOffCommand from "./commandDevice/CeilingFanOffCommand";
import CeilingFanOnCommand from "./commandDevice/CeilingFanOnCommand";
import GarageDoorOffCommand from "./commandDevice/GarageDoorOffCommand";
import { GarageDoorOnCommand } from "./commandDevice/GarageDoorOnCommand";
import LightOffCommand from "./commandDevice/LightOffCommand";
import LightOnCommand from "./commandDevice/LightOnCommand";
import NoCommand from "./commandDevice/NoCommand";
import { StereoOffCommand } from "./commandDevice/StereoOffCommand";
import { StereoOnCommand } from "./commandDevice/StereoOnCommand";
import CeilingFan from "./devices/CeilingFan";
import GarageDoor from "./devices/GarageDoor";
import Light from "./devices/Light";
import Stereo from "./devices/Stereo";
import { RemoteController } from "./RemoteController";

const kitchenLight = new Light('Kitchen');
const bathroomLight = new Light('bathroom');
const stereo = new Stereo();
const garage = new GarageDoor();
const garageLight = new Light('Garage');
const ceiling = new CeilingFan();

const kitchenLightOnCommand = new LightOnCommand(kitchenLight);
const kitchenLightOffCommand = new LightOffCommand(kitchenLight);
const bathroomLightOnCommand = new LightOnCommand(bathroomLight);
const bathroomLightOffCommand = new LightOffCommand(bathroomLight);
const stereoOnCommand = new StereoOnCommand(stereo);
const stereoOffCommand = new StereoOffCommand(stereo);
const garageOnCommand = new GarageDoorOnCommand(garage, garageLight);
const garageOffCommand = new GarageDoorOffCommand(garage, garageLight);
const ceilingOnCommand = new CeilingFanOnCommand(ceiling);
const ceilingOffCommand = new CeilingFanOffCommand(ceiling);

const remoteControl = new RemoteController(new NoCommand());

remoteControl.setCommand(0, kitchenLightOnCommand, kitchenLightOffCommand);
remoteControl.setCommand(1, bathroomLightOnCommand, bathroomLightOffCommand);
remoteControl.setCommand(2, stereoOnCommand, stereoOffCommand);
remoteControl.setCommand(3, garageOnCommand, garageOffCommand);
remoteControl.setCommand(4, ceilingOnCommand, ceilingOffCommand);

remoteControl.onButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.undoButtonWasPushed();
remoteControl.offButtonWasPushed(1);