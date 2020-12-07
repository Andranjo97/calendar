import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initCalendar } from "../../reducers/calendarSlice";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

function Calendar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCalendar());
  }, [dispatch]);

  return (
    <>
      <CalendarHeader />
      <CalendarBody />
    </>
  );
}

export default Calendar;
