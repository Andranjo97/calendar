import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "../features/remiders/presentation/reducers/reminderSlice";
import calendarReducer from "../features/calendar/presentation/reducers/calendarSlice";
import weatherReducer from "../features/weather/presentation/reducers/weatherSlice";

export default configureStore({
  reducer: {
    reminder: reminderReducer,
    calendar: calendarReducer,
    weather: weatherReducer,
  },
});
