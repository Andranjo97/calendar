import React from 'react';
import DateUtils from './core/utils/DateUtils.js';
import './App.css';
import DateCell from "./features/calendar/presentation/components/DateCell/DateCell";

function App() {
    let currentMoth = 11;
    let currentYear = 2020;
    let date = 1;
    let myArray = [1,2,3,4,5,6];
    let anotherArray = [1,2,3,4,5,6,7];
    let firstDay = DateUtils.getFirstDayOfMonthInYear(currentYear, currentMoth);
    let numberOfDays = DateUtils.getDaysOfMonthInYear(currentYear, currentMoth);

  return (
    <div className="App">
          {myArray.map((row, i) => <div>{
              anotherArray.map((square, j) => {
                  if(i === 0 && j <= firstDay) {
                      return <DateCell>{null}</DateCell>;
                  }
                  else if (date > numberOfDays) {
                      return <DateCell>{null}</DateCell>;
                  }
                  else {
                    return <DateCell>{date++}</DateCell>;
                  }
              })}</div>)}
    </div>
  );
}

export default App;
