import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styles from "./ReminderDateItem.module.scss";

const ReminderDateItem = ({ reminder }) => {
  return (
    <Grid container item>
      <div
        className={styles.reminderDateItem}
        style={{ background: reminder.color }}
      >
        {reminder.time} - {reminder.description}
      </div>
    </Grid>
  );
};

ReminderDateItem.propTypes = {
  reminder: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};

export default ReminderDateItem;
