import React from "react";
import PropTypes from "prop-types";
import css from "./Counter.module.css";

const Counter = ({ index, length }) => (
    <p className={css.counter}>
        {index + 1}/{length}
    </p>
);

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
};

export default Counter;
