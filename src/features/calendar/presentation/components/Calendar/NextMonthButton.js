import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { nextMonth } from "../../reducers/calendarSlice";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const NextMonthButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Next Month" placement="top">
      <IconButton onClick={() => dispatch(nextMonth())}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Tooltip>
  );
};

export default NextMonthButton;
