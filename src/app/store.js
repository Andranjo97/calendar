import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import calendarReducer from "../features/calendar/presentation/reducers/calendarSlice";
import weatherReducer from "../features/weather/presentation/reducers/weatherSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    calendar: calendarReducer,
    weather: weatherReducer,
  },
});
