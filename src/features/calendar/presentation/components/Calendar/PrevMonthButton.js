import React from "react";
import { prevMonth } from "../../reducers/calendarSlice";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const PrevMonthButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Previous Month" placement="top">
      <IconButton onClick={() => dispatch(prevMonth())}>
        <ArrowBackIosIcon />
      </IconButton>
    </Tooltip>
  );
};

export default PrevMonthButton;
