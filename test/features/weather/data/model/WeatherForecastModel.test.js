import file from "../../../../fixtures/weather.json";
import WeatherForecastModel from "../../../../../src/features/weather/data/models/WeatherForecastModel";

describe('WeatherForecastModel', () => {
    const model = WeatherForecastModel.fromJSON(file['weather'][0]);
    it('should return valid WeatherForecastModel', function () {
        let result = new WeatherForecastModel(501, "Rain", "moderate rain", "10n");

        expect(result).toEqual(model);
    });

    it('should return valid json model', function () {
        let expected = {
            'id': 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
        };

        let result = model.toJSON();

        expect(result).toEqual(expected);
    });
});