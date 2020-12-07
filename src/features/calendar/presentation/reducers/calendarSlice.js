import { createSlice } from "@reduxjs/toolkit";
import DateUtils from "../../../../core/utils/DateUtils";

const setCalendar = (state) => {
  const dates = [];
  state.firstDayOfMonth = DateUtils.getFirstDayOfMonthInYear(
    state.currentYear,
    state.currentMonth
  ).getDay();
  state.totalDays = DateUtils.getDaysOfMonthInYear(
    state.currentYear,
    state.currentMonth
  );
  state.totalWeeks = DateUtils.getWeeksInMonthInYear(
    state.currentYear,
    state.currentMonth
  );

  for (let i = 0; i < state.totalDays; i++) {
    dates.push({
      id: `${state.currentYear}-${state.currentMonth}-${i + 1}`,
      day: i + 1,
    });
  }

  state.dates = dates;
};

export const initialState = {
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  totalWeeks: 0,
  totalDays: 0,
  firstDayOfMonth: 0,
  dates: [],
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    initCalendar: setCalendar,
    nextMonth: (state) => {
      if (state.currentMonth === 11) {
        state.currentMonth = 0;
        state.currentYear = state.currentYear += 1;
      } else {
        state.currentMonth += 1;
      }

      setCalendar(state);
    },
    prevMonth: (state) => {
      if (state.currentMonth === 0) {
        state.currentMonth = 11;
        state.currentYear = state.currentYear -= 1;
      } else {
        state.currentMonth -= 1;
      }

      setCalendar(state);
    },
  },
});

export const { initCalendar, nextMonth, prevMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
