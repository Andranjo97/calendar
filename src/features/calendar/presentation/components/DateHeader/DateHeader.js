import React from 'react';
import style from "./DateHeader.module.scss";

const weekDays = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
};

const DateHeader = ({ date }) => {
    return (
        <div className={style.dateHeader}>
            <span>{weekDays[date]}</span>
        </div>
    );
};

export default DateHeader;
