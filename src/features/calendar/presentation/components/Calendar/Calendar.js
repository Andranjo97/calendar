import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DateUtils from "../../../../../core/utils/DateUtils";
import DateCell from "../DateCell/DateCell";
import styles from "./Calendar.module.scss";
import {
  initCalendar,
  nextMonth,
  prevMonth,
} from "../../reducers/calendarSlice";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import DateHeader from "../DateHeader/DateHeader";

const monthNames = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

function Calendar() {
  const dispatch = useDispatch();
  dispatch(initCalendar());

  let currentMonth = useSelector((state) => state.calendar.currentMonth);
  let currentYear = useSelector((state) => state.calendar.currentYear);
  let date = 1;
  let myArray = [1, 2, 3, 4, 5];
  let weekDays = [1, 2, 3, 4, 5, 6, 7];
  let firstDay = DateUtils.getFirstDayOfMonthInYear(
    currentYear,
    currentMonth
  ).getDay();
  let numberOfDays = DateUtils.getDaysOfMonthInYear(currentYear, currentMonth);

  return (
    <>
      <div className={styles.calendarHeader}>
        <span>
          {monthNames[currentMonth]} {currentYear}
        </span>
        <div>
        <IconButton onClick={() => dispatch(prevMonth())}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(nextMonth())}>
          <ArrowForwardIosIcon />
        </IconButton>
        </div>
      </div>
      <>
        {weekDays.map((square, j) => (
          <DateHeader date={j} />
        ))}
        {myArray.map((row, i) => (
          <div className={styles.calendarRow}>
            {weekDays.map((square, j) => {
              if (i === 0 && j < firstDay) {
                return <DateCell isNotInMoth />;
              } else if (date > numberOfDays) {
                return <DateCell isNotInMoth />;
              } else {
                return (
                  <DateCell isWeekend={j === 0 || j === 6}>{date++}</DateCell>
                );
              }
            })}
          </div>
        ))}
      </>
    </>
  );
}

export default Calendar;
