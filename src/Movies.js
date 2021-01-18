import React from "react";
import PropTypes from "prop-types";
import "./Movies.css"

function Movies({imgurl, title, summary, year, genres}) {
    return(
        <div className="movie">
            <img src={imgurl} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
};

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    imgurl: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movies;