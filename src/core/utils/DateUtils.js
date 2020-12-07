const MAX_NUMBER_OF_DAYS = 32;

const DateUtils = {
    // Returns the first day of the month in a certain year as an integer representing the week day
    getFirstDayOfMonthInYear: (year, month) => new Date(year, month),

    getLastDayOfMonthInYear: (year, month) => new Date(year, month + 1, 0),

    getDaysOfMonthInYear: (year, month) => MAX_NUMBER_OF_DAYS - new Date(year, month, MAX_NUMBER_OF_DAYS).getDate(),

    getWeeksInMonthInYear: function (year, month) {
        let firstOfMonth = this.getFirstDayOfMonthInYear(year, month);
        let lastOfMonth = this.getLastDayOfMonthInYear(year, month);

        let used = firstOfMonth.getDay() + lastOfMonth.getDate();

        return Math.ceil( used / 7);
    },
};

module.exports = DateUtils;
