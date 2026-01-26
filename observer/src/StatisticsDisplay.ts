import { DisplayElement } from "./interfaces/DisplayElement";
import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0.0;
  private minTemp = 200;
  private tempSum = 0.0;
  private numReadings = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  display(): void {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`
    );
  }
}

export default StatisticsDisplay;