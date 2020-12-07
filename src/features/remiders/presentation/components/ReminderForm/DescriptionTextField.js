import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

export default function DescriptionTextField({ description, setDescription }) {
  return (
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
  );
}

DescriptionTextField.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};
