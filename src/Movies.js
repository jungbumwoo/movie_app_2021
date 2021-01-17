import React from "react";
import PropTypes from "prop-types";

function Movies({id, imgurl, title, summary, year}) {
    return(
        <div>
            <img src={imgurl} alt={title}/>
            <h5>{title}</h5>
            <span>({year})</span>
            <span>{summary}</span>
        </div>
    )
};

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    imgurl: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
};

export default Movies;