import React from "react";
import PropTypes from "prop-types";
import { removeReminder } from "../../../../remiders/presentation/reducers/reminderSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const DeleteReminderButton = ({ reminderId, dateId }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(removeReminder({ reminderId, dateId }))}
    >
      <DeleteIcon />
    </IconButton>
  );
};

DeleteReminderButton.propTypes = {
  reminderId: PropTypes.string.isRequired,
  dateId: PropTypes.string.isRequired,
};

export default DeleteReminderButton;
