const MAX_NUMBER_OF_DAYS = 32;

const DateUtils = {
    // Returns the first day of the month in a certain year as an integer representing the week day
    getFirstDayOfMonthInYear: (year, month) => new Date(year, month),

    getLastDayOfMonthInYear: (year, month) => new Date(year, month + 1, 0),

    getDaysOfMonthInYear: (year, month) => MAX_NUMBER_OF_DAYS - new Date(year, month, MAX_NUMBER_OF_DAYS).getDate(),

    getWeeksInMonthInYear: function (year, month) {
        let firstDay = this.getFirstDayOfMonthInYear(year, month);
        let totalDays = this.getDaysOfMonthInYear(year, month);
        let start = 1;
        let end = 7 - firstDay.getDay();
        let weeks = 0;

        while (start < end) {
            weeks++;
            start = end + 1;
            end = end + 7;
            if(end > totalDays) end = totalDays;
        }

        return weeks;
    },
};

module.exports = DateUtils;
