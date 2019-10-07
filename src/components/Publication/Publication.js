import React from "react";
import PropTypes from "prop-types";
import css from "./Publication.module.css";

const Publication = ({ article }) => {
    const { title, text } = article;
    return (
        <article className={css.publication}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
};

Publication.propTypes = {
    article: PropTypes.object.isRequired
};

export default Publication;
