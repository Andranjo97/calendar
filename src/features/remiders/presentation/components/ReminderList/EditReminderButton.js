import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const EditReminderButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <EditIcon />
    </IconButton>
  );
};

EditReminderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditReminderButton;
