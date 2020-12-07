import WeatherForecastModel from "../../../../../src/features/weather/data/models/WeatherForecastModel";
import file from "../../../../fixtures/weather.json";
import WeatherRepository from "../../../../../src/features/weather/data/repositores/WeatherRepository";

describe('WeatherRepository', function () {
    const model = WeatherForecastModel.fromJSON(file);
    const mockDataSource = {
        getWeatherForecast: jest.fn().mockResolvedValue(model),
    };
    let repository;

    beforeEach(() => {
        repository = new WeatherRepository(mockDataSource);
    });

    it('should return model', async function () {
        let result = await repository.getWeatherForecast('quito');

        expect(result).toEqual(model);
    });
});