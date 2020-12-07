import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Calendar from "./features/calendar/presentation/components/Calendar/Calendar";
import { setCurrentWeatherAsync } from "./features/weather/presentation/reducers/weatherSlice";
import WeatherDisplay from "./features/weather/presentation/components/WeatherDisplay/WeatherDisplay";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentWeatherAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
