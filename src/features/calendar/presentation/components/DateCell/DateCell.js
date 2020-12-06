import React, { useState } from "react";
import styles from "./DateCell.module.scss";
import ReminderDialog from "../../../../remiders/presentation/components/ReminderDialog/ReminderDialog";

const DateCell = ({ children, isNotInMoth = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={isNotInMoth ? styles.disabledDateCell : styles.dateCell}
        onClick={() => {
          !isNotInMoth && setOpen(true);
        }}
      >
        {children}
      </div>
      <ReminderDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DateCell;
