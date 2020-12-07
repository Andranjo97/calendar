import WeatherForecastModel from "../../../../../src/features/weather/data/models/WeatherForecastModel";
import file from "../../../../fixtures/weather.json";
import WeatherRemoteDataSource from "../../../../../src/features/weather/data/dataSources/weatherRemoteDataSource";

describe("WeatherRemoteDataSource", function () {
  let remoteDataSource;

  it("should get weather", async function () {
    const mockedRequest = {
      get: jest.fn().mockResolvedValue({ status: 200, data: file }),
    };
    remoteDataSource = new WeatherRemoteDataSource(mockedRequest);
    const model = WeatherForecastModel.fromJSON(file["weather"][0]);

    const result = await remoteDataSource.getWeatherForecast("quito");

    expect(result).toEqual(model);
  });
});
