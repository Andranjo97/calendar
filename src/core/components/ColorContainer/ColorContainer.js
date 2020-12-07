import React from "react";
import PropTypes from "prop-types";
import styles from "./ColorContainer.module.scss";

const ColorContainer = ({ color }) => (
  <div style={{ background: color }} className={styles.colorContainer} />
);

ColorContainer.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorContainer;
