import React from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Calendar from "./features/calendar/presentation/components/Calendar/Calendar";
import {setCurrentWeatherAsync} from "./features/weather/presentation/reducers/weatherSlice";


function App() {
    const dispatch = useDispatch();
    dispatch(setCurrentWeatherAsync());

  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
