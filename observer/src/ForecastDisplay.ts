import { DisplayElement, Observer, Subject } from "./WeatherData";

class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  display(): void {
    console.log(
      `Forecast: ${this.currentPressure > this.lastPressure ? "Improving weather on the way!" : "Watch out for cooler, rainy weather"}`
    );
  }
}