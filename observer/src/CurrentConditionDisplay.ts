import { DisplayElement } from "./interfaces/DisplayElement";
import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees,  ${this.humidity}% humidity and presure: ${this.pressure}`);
  }
}

export default CurrentConditionDisplay;