import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./DateCell.module.scss";
import Grid from "@material-ui/core/Grid";
import ReminderDialog from "../../../../remiders/presentation/components/ReminderDialog/ReminderDialog";
import ReminderDateItems from "../../../../remiders/presentation/components/ReminderDateItems/ReminderDateItems";
import {useDispatch} from "react-redux";
import {clearWeather} from "../../../../weather/presentation/reducers/weatherSlice";

const DateCell = ({ date, isNotInMoth, isWeekend }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOnClose = () => {
    setOpen(false);
    dispatch(clearWeather());
  };

  return (
    <>
      <div
        key={date.day}
        className={
          isNotInMoth
            ? styles.disabledDateCell
            : isWeekend
            ? styles.weekendDateCell
            : styles.dateCell
        }
        onClick={() => {
          !isNotInMoth && setOpen(true);
        }}
      >
        <Grid container spacing={1}>
          <Grid container item>
            {date.day}
          </Grid>
          <ReminderDateItems dateId={date.id} />
        </Grid>
      </div>
      <ReminderDialog date={date} open={open} onClose={handleOnClose} />
    </>
  );
};

DateCell.propTypes = {
  date: PropTypes.shape({
    id: PropTypes.string,
    day: PropTypes.string,
  }).isRequired,
  isNotInMoth: PropTypes.bool,
  isWeekend: PropTypes.bool,
};

DateCell.defaultProps = {
  date: {},
  isNotInMoth: false,
  isWeekend: false,
};

export default DateCell;
