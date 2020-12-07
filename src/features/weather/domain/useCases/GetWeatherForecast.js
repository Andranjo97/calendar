function GetWeatherForecast(repository) {
  this.repository = repository;
}

GetWeatherForecast.prototype.init = async function (city) {
  return await this.repository.getWeatherForecast(city);
};

export default GetWeatherForecast;
