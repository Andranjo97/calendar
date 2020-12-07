import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ColorContainer from "../../../../../core/components/ColorContainer/ColorContainer";
import { GithubPicker } from "react-color";
import IconButton from "@material-ui/core/IconButton";
import CancelButton from "@material-ui/icons/Close";
import AcceptButton from "@material-ui/icons/Done";
import { cities } from "../../../../../core/constants/cities";
import { setCurrentWeatherAsync } from "../../../../weather/presentation/reducers/weatherSlice";
import { useDispatch } from "react-redux";
import DescriptionTextField from "./DescriptionTextField";
import TimeTextField from "./TimeTextField";
import CitySelect from "./CitySelect";

const ReminderForm = ({ reminder, onAccept, onCancel }) => {
  const dispatch = useDispatch();
  const today = new Date();
  const [color, setColor] = useState(reminder.color || "#fff");
  const [description, setDescription] = useState(reminder.description || "");
  const [city, setCity] = useState(cities[0].name);
  const [time, setTime] = useState(
    reminder.time ||
      `${today.getHours()}:${
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
      }`
  );
  const handleOnAccept = () => {
    onAccept({ ...reminder, description, color, time, city });
  };

  useEffect(() => {
    dispatch(setCurrentWeatherAsync(city));
  }, [city]);

  return (
    <>
      <Grid container>
        <Grid item xs={3} style={{ alignSelf: "center" }}>
          <ColorContainer color={color} />
        </Grid>
        <Grid item container xs={6}>
          <Grid item={12}>
            <DescriptionTextField
              description={description}
              setDescription={setDescription}
            />
          </Grid>
          <br />
          <br />
          <Grid item={3}>
            <TimeTextField setTime={setTime} time={time} />
          </Grid>
          <Grid item={3}>
            <CitySelect city={city} setCity={setCity} />
          </Grid>
        </Grid>
        <Grid item container xs={3} style={{ alignSelf: "center" }}>
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
    time: PropTypes.string.isRequired,
  }),
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
};

ReminderForm.defaultProps = {
  reminder: {},
};

export default ReminderForm;
