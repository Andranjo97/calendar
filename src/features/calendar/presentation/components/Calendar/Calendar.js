import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Calendar.module.scss";
import {
  initCalendar,
  nextMonth,
  prevMonth,
} from "../../reducers/calendarSlice";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import CalendarBody from "./CalendarBody";
import {monthNames} from "../../../../../core/constants/dateConstants";

function Calendar() {
  const dispatch = useDispatch();
  let currentMonth = useSelector((state) => state.calendar.currentMonth);
  let currentYear = useSelector((state) => state.calendar.currentYear);

  useEffect(() => {
    dispatch(initCalendar());
  }, []);

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
        <CalendarBody/>
    </>
  );
}

export default Calendar;
