const dateUtils = require("../../../src/core/utils/DateUtils");

describe("DateUtils", () => {
  it("should return first day of certain date with year and month", () => {
    let year = 2020;
    let decemberMonth = 11;
    let expectedDay = new Date(year, decemberMonth);

    let result = dateUtils.getFirstDayOfMonthInYear(year, decemberMonth);

    expect(result).toEqual(expectedDay);
  });

  it("should return first day of certain date with year and month", () => {
    let year = 2020;
    let decemberMonth = 11;
    let expectedLastDay = new Date(year, decemberMonth + 1, 0);

    let result = dateUtils.getLastDayOfMonthInYear(year, decemberMonth);

    expect(result).toEqual(expectedLastDay);
  });

  it("should return numbers of days in a month", () => {
    let year = 2020;
    let decemberMonth = 11;
    let expectedNumberOfDays = 31;

    let result = dateUtils.getDaysOfMonthInYear(year, decemberMonth);

    expect(result).toBe(expectedNumberOfDays);
  });

  it("should return numbers of weeys in a month", () => {
    let year = 2020;
    let decemberMonth = 11;
    let expectedWeeks = 5;

    let result = dateUtils.getWeeksInMonthInYear(year, decemberMonth);

    expect(result).toBe(expectedWeeks);
  });
});
