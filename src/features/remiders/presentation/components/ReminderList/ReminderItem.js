import React, { useState } from "react";
import PropTypes from "prop-types";
import ReminderForm from "../ReminderForm/ReminderForm";
import { useDispatch } from "react-redux";
import { editReminder } from "../../reducers/reminderSlice";
import ReminderDisplay from "./ReminderDisplay";

const ReminderItem = ({ reminder, dateId }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleAcceptEdit = (editedReminder) => {
    dispatch(
      editReminder({
        dateId,
        reminder: editedReminder,
      })
    );
    setIsEdit(false);
  };

  return (
    <div key={reminder.id}>
      {isEdit ? (
        <ReminderForm
          onCancel={() => setIsEdit(false)}
          onAccept={handleAcceptEdit}
          reminder={reminder}
        />
      ) : (
        <ReminderDisplay
          onEdit={() => setIsEdit(true)}
          dateId={dateId}
          reminder={reminder}
        />
      )}
    </div>
  );
};

ReminderItem.propTypes = {
  reminder: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  dateId: PropTypes.string.isRequired,
};

export default ReminderItem;
