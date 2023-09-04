import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto h-full">
    <img
      key={movie.imdbID}
      className="w-full h-72 object-cover rounded-lg"
      src={movie.Poster}
      alt={movie.Title}
    />
    <div className="px-6 py-2">
      <ul>
        <li>
          <strong>Title: </strong>
          {movie.Title}
        </li>
        <li>
          <strong>Year: </strong>
          {movie.Year}
        </li>
      </ul>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
