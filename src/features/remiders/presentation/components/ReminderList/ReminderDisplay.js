import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ColorContainer from "../../../../../core/components/ColorContainer/ColorContainer";
import EditReminderButton from "./EditReminderButton";
import DeleteReminderButton from "./DeleteReminderButton";

const ReminderDisplay = ({ reminder, onEdit, dateId }) => {
  return (
    <Grid container>
      <Grid item xs={3} style={{ alignSelf: "center" }}>
        <ColorContainer color={reminder.color} />
      </Grid>
      <Grid item xs={6} style={{ alignSelf: "center" }}>
        <span>{reminder.description}</span>
      </Grid>
      <Grid item container xs={3}>
        <Grid item xs={6}>
          <EditReminderButton
            reminder={reminder}
            dateId={dateId}
            onClick={onEdit}
          />
        </Grid>
        <Grid item xs={6}>
          <DeleteReminderButton dateId={dateId} reminderId={reminder.id} />
        </Grid>
      </Grid>
    </Grid>
  );
};

ReminderDisplay.propTypes = {
  reminder: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  dateId: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ReminderDisplay;
