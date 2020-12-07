import React, { useState } from "react";
import styles from "./DateCell.module.scss";
import Grid from "@material-ui/core/Grid";
import ReminderDialog from "../../../../remiders/presentation/components/ReminderDialog/ReminderDialog";

const DateCell = ({ children, isNotInMoth = false, isWeekend = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={isNotInMoth ? styles.disabledDateCell : isWeekend ? styles.weekendDateCell : styles.dateCell}
        onClick={() => {
          !isNotInMoth && setOpen(true);
        }}
      >
        <Grid container spacing={1}>
          <Grid container item>
            {children}
          </Grid>
        </Grid>
      </div>
      <ReminderDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DateCell;
