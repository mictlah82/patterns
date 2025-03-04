import CurrentConditionDisplay from "./CurrentConditionDisplay";
import StatisticsDisplay from "./StatisticsDisplay";
import { WeatherData } from "./WeatherData";

const weatherData = new WeatherData();
const currentConditionDisplay = new CurrentConditionDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(82, 70, 29.5);
weatherData.setMeasurements(79, 67, 29.8);
