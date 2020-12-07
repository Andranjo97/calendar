import React from "react";
import Select from "@material-ui/core/Select/Select";
import { cities } from "../../../../../core/constants/cities";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function CitySelect({ city, setCity }) {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={city}
      onChange={(e) => {
        setCity(e.target.value);
      }}
    >
      {cities.map((defCity) => (
        <MenuItem key={defCity.id} value={defCity.name}>
          {defCity.name}
        </MenuItem>
      ))}
    </Select>
  );
}

CitySelect.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};
