import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ColorContainer from "../../../../core/components/ColorContainer/ColorContainer";
import TextField from "@material-ui/core/TextField/TextField";
import { GithubPicker } from "react-color";
import IconButton from "@material-ui/core/IconButton";
import CancelButton from "@material-ui/icons/Close";
import AcceptButton from "@material-ui/icons/Done";

const ReminderForm = ({ reminder, onAccept, onCancel }) => {
  const [color, setColor] = useState(reminder.color || "#fff");
  const [description, setDescription] = useState(reminder.description || "");
  const handleOnAccept = () => {
    onAccept({ ...reminder, description, color });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3} style={{ alignSelf: "flex-end" }}>
          <ColorContainer color={color} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Description"
            autoFocus
            value={description}
            multiline
            required
            input="text"
            onInput={(e) => {
              e.target.value =
                e.target.value.length > 29
                  ? e.target.value.slice(0, 29)
                  : e.target.value;
            }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Grid>
        <Grid item container xs={3}>
          <Grid item xs={6}>
            <IconButton onClick={handleOnAccept}>
              <AcceptButton />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton onClick={onCancel}>
              <CancelButton />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <br />
      <GithubPicker onChangeComplete={(newColor) => setColor(newColor.hex)} />
    </>
  );
};

ReminderForm.propTypes = {
  reminder: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
};

ReminderForm.defaultProps = {
  reminder: {},
};

export default ReminderForm;
