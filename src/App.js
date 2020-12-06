import React from "react";
import DateUtils from "./core/utils/DateUtils.js";
import "./App.scss";
import DateCell from "./features/calendar/presentation/components/DateCell/DateCell";

function App() {
  let currentMoth = 11;
  let currentYear = 2020;
  let date = 1;
  let myArray = [1, 2, 3, 4, 5];
  let anotherArray = [1, 2, 3, 4, 5, 6, 7];
  let firstDay = DateUtils.getFirstDayOfMonthInYear(currentYear, currentMoth);
  let numberOfDays = DateUtils.getDaysOfMonthInYear(currentYear, currentMoth);

  return (
    <div className="App">
      {myArray.map((row, i) => (
        <div className="calendarRow">
          {anotherArray.map((square, j) => {
            if (i === 0 && j <= firstDay) {
              return <DateCell isNotInMoth>{31}</DateCell>;
            } else if (date > numberOfDays) {
              return <DateCell isNotInMoth>{1}</DateCell>;
            } else {
              return <DateCell>{date++}</DateCell>;
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
