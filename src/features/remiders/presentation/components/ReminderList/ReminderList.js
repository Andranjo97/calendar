import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ReminderItem from "./ReminderItem";

const ReminderList = ({ dateId }) => {
  const reminders = useSelector((state) => state.reminder[dateId] || []);
  return (
    <div style={{ maxHeight: "20em" }}>
      {reminders.map((reminder) => (
        <ReminderItem reminder={reminder} dateId={dateId} />
      ))}
    </div>
  );
};

ReminderList.propTypes = {
  dateId: PropTypes.string,
};

export default ReminderList;
