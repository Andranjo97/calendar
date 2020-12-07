function WeatherRepository(remoteDataSource) {
  this.remoteDataSource = remoteDataSource;
}

WeatherRepository.prototype.getWeatherForecast = async function (city) {
  try {
    return await this.remoteDataSource.getWeatherForecast(city);
  } catch (e) {
    console.error(e.message);
  }
};

export default WeatherRepository;
