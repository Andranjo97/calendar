import WeatherForecastModel from "../models/WeatherForecastModel";

function WeatherRemoteDataSource(httpClient) {
    this.client = httpClient;
}

WeatherRemoteDataSource.prototype.getWeatherForecast = async function (city) {
    let url = `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    let response = await this.client.get(url);

    if (response.status === 200) {
        return WeatherForecastModel.fromJSON(response.data['weather'][0]);
    } else {
        throw new TypeError('Error');
    }
};

export default WeatherRemoteDataSource;
