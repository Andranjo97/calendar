import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createReminder } from "../../reducers/reminderSlice";
import Grid from '@material-ui/core/Grid';
import { GithubPicker } from "react-color";

const ReminderDialog = ({ open, onClose, date }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("#fff");
    const [reminderDescription, setReminderDescription] = useState('');

    const handleCreate = () => {
        dispatch(createReminder({
            dateId: date.id,
            reminder: {
                description: reminderDescription,
                color: color,
            },
        }));
        onClose();
    };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Reminder</DialogTitle>
      <DialogContent>
          <Grid container>
              <Grid item xs={2} style={{ alignSelf: "flex-end" }}>
                  <div style={{ borderRadius: '50%', height: '20px', width: '20px', background: color, marginLeft: '10px', border: "1px  solid grey" }} />
              </Grid>
              <Grid item xs={10}>
                <TextField
                    label="Description"
                    autoFocus
                    multiline
                    input="text"
                    onInput={(e) => {
                        e.target.value = e.target.value.length > 29 ? e.target.value.slice(0, 29) : e.target.value;
                    }}
                    onChange={(e) => {
                        setReminderDescription(e.target.value);
                    }}
                />
              </Grid>
          </Grid>
          <br/>
          <GithubPicker onChangeComplete={(newColor) => setColor(newColor.hex)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReminderDialog;
