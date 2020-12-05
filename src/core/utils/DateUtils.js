const MAX_NUMBER_OF_DAYS = 32;

const DateUtils = {
    // Returns the first day of the month in a certain year as an integer representing the week day
    getFirstDayOfMonthInYear: (year, month) => new Date(year, month).getDate(),

    getDaysOfMonthInYear: (year, month) => MAX_NUMBER_OF_DAYS - new Date(year, month, MAX_NUMBER_OF_DAYS).getDate(),
};

module.exports = DateUtils;
