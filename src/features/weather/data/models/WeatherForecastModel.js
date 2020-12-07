import WeatherForecast from "../../domain/entities/WeatherForecast";

class WeatherForecastModel extends WeatherForecast {
  toJSON() {
    return {
      id: this.id,
      main: this.main,
      description: this.description,
      icon: this.icon,
    };
  }

  static fromJSON(jsonMap) {
    return new WeatherForecastModel(
      jsonMap["id"],
      jsonMap["main"],
      jsonMap["description"],
      jsonMap["icon"]
    );
  }
}

export default WeatherForecastModel;
