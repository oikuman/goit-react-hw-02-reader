import React from "react";
import PropTypes from "prop-types";
import css from "./Controls.module.css";

const Controls = ({ handleBack, handleForward }) => (
    <section className={css.controls}>
        <button
            onClick={e => handleBack(e)}
            type="button"
            className={css.button}
        >
            Назад
        </button>
        <button
            onClick={e => handleForward(e)}
            type="button"
            className={css.button}
        >
            Вперед
        </button>
    </section>
);

Controls.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleForward: PropTypes.func.isRequired
};

export default Controls;
