import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { setCurrentWeatherAsync } from "../../reducers/weatherSlice";

const WeatherDisplay = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(setCurrentWeatherAsync());
  }, [dispatch]);

  return (
    <>
      {weather.main && weather.main !== "" ? (
        <Grid container alignContent="center">
          <Grid item xs={3}>
            <img
              alt="weather-forecast"
              src={`${process.env.REACT_APP_IMAGE_WEATHER_API_URL}/${weather.icon}@2x.png`}
            />
          </Grid>
          <Grid
            item
            container
            xs={6}
            style={{ alignSelf: "center" }}
            alignContent="center"
          >
            <Grid item xs={12}>
              <Typography variant="h6">Current weather</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{weather.main}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default WeatherDisplay;
