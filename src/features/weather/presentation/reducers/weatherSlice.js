import { createSlice } from "@reduxjs/toolkit";
import { getWeatherForecast } from "../../../../injection";

export const initialState = {
  id: 0,
  main: "",
  description: "",
  icon: "",
  city: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      const { id, main, description, icon, city } = action.payload;
      state.id = id;
      state.main = main;
      state.description = description;
      state.icon = icon;
      state.city = city;
    },
    clearWeather: state => {
      Object.entries(state).forEach(([stateKey]) => {
        state[stateKey] = initialState[stateKey];
      });
    }
  },
});

export const { setCurrentWeather, clearWeather } = weatherSlice.actions;

export const setCurrentWeatherAsync = (city = "quito") => (dispatch) => {
  getWeatherForecast
    .init(city)
    .then((response) => dispatch(setCurrentWeather({ ...response, city })))
    .catch((error) => dispatch(clearWeather()));
};

export default weatherSlice.reducer;
