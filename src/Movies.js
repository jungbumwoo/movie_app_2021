import React from "react";
import PropTypes from "prop-types";

function Movies({id, url, title, summary, year}) {
    return(
        <div>
            <img src={url} alt={title}/>
            <h5>{title}</h5>
            <span>{year}</span>
            <span>{summary}</span>
        </div>
    )
};

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
};

export default Movies;