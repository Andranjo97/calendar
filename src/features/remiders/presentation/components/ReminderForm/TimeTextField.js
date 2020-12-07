import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import React from "react";

export default function TimeTextField({ time, setTime }) {
  return (
    <TextField
      id="time"
      type="time"
      defaultValue={time}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 300, // 5 min
      }}
      onChange={(e) => {
        setTime(e.target.value);
      }}
    />
  );
}

TimeTextField.propTypes = {
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};
