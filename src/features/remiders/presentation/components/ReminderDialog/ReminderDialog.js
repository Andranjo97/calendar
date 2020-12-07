import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { createReminder } from "../../reducers/reminderSlice";
import ReminderList from "../ReminderList/ReminderList";
import ReminderForm from "../ReminderForm";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import WeatherDisplay from "../../../../weather/presentation/components/WeatherDisplay/WeatherDisplay";

const ReminderDialog = ({ open, onClose, date }) => {
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);

  const handleCreate = (reminder) => {
    dispatch(
      createReminder({
        dateId: date.id,
        reminder,
      })
    );
    setIsCreate(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>Reminders</DialogTitle>
      <DialogContent>
        <WeatherDisplay />
        {isCreate ? (
          <ReminderForm
            onCancel={() => setIsCreate(false)}
            onAccept={handleCreate}
          />
        ) : (
          <Button onClick={() => setIsCreate(true)}>+ Add New Reminder</Button>
        )}
        <br />
        <ReminderList dateId={date.id} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReminderDialog;
