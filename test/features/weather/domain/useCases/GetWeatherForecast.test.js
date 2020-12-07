import WeatherForecastModel from "../../../../../src/features/weather/data/models/WeatherForecastModel";
import file from "../../../../fixtures/weather.json";
import GetWeatherForecast from "../../../../../src/features/weather/domain/useCases/GetWeatherForecast";

describe("GetWeatherForecast", function () {
  const model = WeatherForecastModel.fromJSON(file);
  let mockRepository = {
    getWeatherForecast: jest.fn().mockResolvedValue(model),
  };
  let usecase = new GetWeatherForecast(mockRepository);

  it("should return valid model from use case", async function () {
    let result = await usecase.init("quito");

    expect(result).toEqual(model);
  });
});
