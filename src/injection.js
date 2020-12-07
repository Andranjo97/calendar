import axios from "axios";
import WeatherRemoteDataSource from "./features/weather/data/dataSources/weatherRemoteDataSource";
import WeatherRepository from "./features/weather/data/repositores/WeatherRepository";
import GetWeatherForecast from "./features/weather/domain/useCases/GetWeatherForecast";
import serviceLocator from "di4js";

serviceLocator
    .register('WeatherRemoteDataSource')
    .as(WeatherRemoteDataSource)
    .withConstructor()
    .param().val(axios)

    .register('WeatherRepository')
    .as(WeatherRepository)
    .withConstructor()
    .param().ref('WeatherRemoteDataSource')

    .register('getWeatherForecast')
    .as(GetWeatherForecast)
    .withConstructor()
    .param().ref('WeatherRepository');

const getWeatherForecast = serviceLocator.resolve('getWeatherForecast');

export { getWeatherForecast };
