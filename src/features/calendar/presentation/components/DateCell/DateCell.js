import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./DateCell.module.scss";
import Grid from "@material-ui/core/Grid";
import ReminderDialog from "../../../../remiders/presentation/components/ReminderDialog/ReminderDialog";

const DateCell = ({ date = {}, isNotInMoth = false, isWeekend = false }) => {
  const [open, setOpen] = useState(false);
  const reminders = useSelector((state) => state.reminder[date.id] || []);

  return (
    <>
      <div
        key={date.day}
        className={isNotInMoth ? styles.disabledDateCell : isWeekend ? styles.weekendDateCell : styles.dateCell}
        onClick={() => {
          !isNotInMoth && setOpen(true);
        }}
      >
        <Grid container spacing={1}>
          <Grid container item>
            {date.day}
          </Grid>
            {reminders.map((reminder) => (
                <Grid container item>
                    <div style={{ width: "100%", background: reminder.color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '5px', borderRadius: '10px' }}>
                    {reminder.description}
                    </div>
                </Grid>
            ))}
        </Grid>
      </div>
      <ReminderDialog date={date} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DateCell;
