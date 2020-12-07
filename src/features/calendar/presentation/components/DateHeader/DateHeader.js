import React from "react";
import style from "./DateHeader.module.scss";

const DateHeader = ({ children }) => {
  return (
    <div key={children.toString()} className={style.dateHeader}>
      <span>{children}</span>
    </div>
  );
};

export default DateHeader;
