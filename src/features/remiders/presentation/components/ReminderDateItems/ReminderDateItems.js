import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ReminderDateItem from "./ReminderDateItem";

const ReminderDateItems = ({ dateId }) => {
  const reminders = useSelector((state) => state.reminder[dateId] || []);

  return reminders.map((reminder) => <ReminderDateItem reminder={reminder} />);
};

ReminderDateItems.propTypes = {
  dateId: PropTypes.string,
};

export default ReminderDateItems;
