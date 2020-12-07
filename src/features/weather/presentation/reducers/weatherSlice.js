import { createSlice } from "@reduxjs/toolkit";
import {getWeatherForecast} from "../../../../injection";

export const initialState = {
    id: 0,
    main: '',
    description: '',
    icon: '',
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        setCurrentWeather: (state, action) => {
            const { id, main, description, icon } = action.payload;
            state.id = id;
            state.main = main;
            state.description = description;
            state.icon = icon;
        }
    }
});

export const { setCurrentWeather } = weatherSlice.actions;

export const setCurrentWeatherAsync = (city = 'quito') => dispatch => {
    getWeatherForecast.init(city)
        .then((response) => dispatch(setCurrentWeather(response)));
};

export default weatherSlice.reducer;
