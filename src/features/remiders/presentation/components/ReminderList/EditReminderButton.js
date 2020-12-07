import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const EditReminderButton = ({ reminder, dateId, onClick }) => {
  const dispatch = useDispatch();

  return (
    <IconButton onClick={onClick}>
      <EditIcon />
    </IconButton>
  );
};

EditReminderButton.propTypes = {
  reminder: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  dateId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditReminderButton;
