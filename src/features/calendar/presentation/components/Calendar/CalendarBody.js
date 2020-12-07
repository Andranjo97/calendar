import React from "react";
import styles from "./Calendar.module.scss";
import DateCell from "../DateCell/DateCell";
import { useSelector } from "react-redux";
import DateUtils from "../../../../../core/utils/DateUtils";
import DateHeader from "../DateHeader/DateHeader";
import { weekDays } from "../../../../../core/constants/dateConstants";

const CalendarBody = () => {
  const currentMonth = useSelector((state) => state.calendar.currentMonth);
  const currentYear = useSelector((state) => state.calendar.currentYear);
  const dates = useSelector((state) => state.calendar.dates);
  const totalWeeks = useSelector((state) => state.calendar.totalWeeks);
  const firstDay = DateUtils.getFirstDayOfMonthInYear(
    currentYear,
    currentMonth
  ).getDay();
  const numberOfDays = DateUtils.getDaysOfMonthInYear(
    currentYear,
    currentMonth
  );
  const standardWeekDays = Object.entries(weekDays);
  let date = 1;

  const dateComponents = [];
  const dateHeadersComponents = standardWeekDays.map(([_, weekDayName]) => (
    <DateHeader>{weekDayName}</DateHeader>
  ));

  for (let i = 0; i < totalWeeks; i++) {
    dateComponents.push(
      <div className={styles.calendarRow}>
        {standardWeekDays.map((_, j) => {
          if (i === 0 && j < firstDay) {
            return <DateCell isNotInMoth />;
          } else if (date > numberOfDays) {
            return <DateCell isNotInMoth />;
          } else {
            const index = date - 1;
            date++;
            return (
              <DateCell isWeekend={j === 0 || j === 6} date={dates[index]} />
            );
          }
        })}
      </div>
    );
  }

  return (
    <>
      {dateHeadersComponents.map((dateHeaderComp) => dateHeaderComp)}
      {dateComponents.map((dateComp) => dateComp)}
    </>
  );
};

export default CalendarBody;
