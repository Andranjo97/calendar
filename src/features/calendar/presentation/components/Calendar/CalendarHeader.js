import React from "react";
import { useSelector } from "react-redux";
import styles from "./Calendar.module.scss";
import { monthNames } from "../../../../../core/constants/dateConstants";
import DeleteRemindersButton from "./DeleteRemindersButton";
import PrevMonthButton from "./PrevMonthButton";
import NextMonthButton from "./NextMonthButton";

const CalendarHeader = () => {
  let currentMonth = useSelector((state) => state.calendar.currentMonth);
  let currentYear = useSelector((state) => state.calendar.currentYear);

  return (
    <>
      <span className={styles.calendarMonthYear}>
        {monthNames[currentMonth]} {currentYear}
      </span>
      <div className={styles.calendarButtons}>
        <div>
          <DeleteRemindersButton />
          <PrevMonthButton />
          <NextMonthButton />
        </div>
      </div>
    </>
  );
};

export default CalendarHeader;
