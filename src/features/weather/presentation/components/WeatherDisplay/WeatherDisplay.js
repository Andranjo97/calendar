import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <>
      <Grid container alignContent="center">
        <Grid item xs={3}>
          <img
            src={
              process.env.REACT_APP_IMAGE_WEATHER_API_URL +
              `/${weather.icon}@2x.png`
            }
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
    </>
  );
};

export default WeatherDisplay;
