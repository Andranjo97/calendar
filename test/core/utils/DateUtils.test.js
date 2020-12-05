const DateUtils = require('../../../src/core/utils/DateUtils');

describe('DateUtils', () => {
    let dateUtils = new DateUtils();

    it('should return first day of certain date with year and month', () => {
        let year = 2020;
        let decemberMonth = 11;
        let expectedDayAsTuesday = 1;

        let result = dateUtils.getFirstDayOfMonthInYear(year, decemberMonth);

        expect(result).toBe(expectedDayAsTuesday);
    });

    it('should return numbers of days in a month', () => {
        let year = 2020;
        let decemberMonth = 11;
        let expectedNumberOfDays = 31;

        let result = dateUtils.getDaysOfMonthInYear(year, decemberMonth);

        expect(result).toBe(expectedNumberOfDays);
    });
});