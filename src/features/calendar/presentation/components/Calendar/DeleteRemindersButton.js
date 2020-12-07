import React from "react";
import { clearReminders } from "../../../../remiders/presentation/reducers/reminderSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";

const DeleteRemindersButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Clear Reminders" placement="top">
      <IconButton onClick={() => dispatch(clearReminders())}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteRemindersButton;
