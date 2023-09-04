import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import MovieCard from './MovieCard';

const Movies = ({ movies }) => (
  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8 max-w-7xl mx-auto w-full">
    {movies.map((movie) => (
      <Link
        key={movie.imdbID}
        className="btn-item auction-btn mr-2"
        to={`/movieDetail/${movie.imdbID}`}
        state={{ id: movie.imdbID }}
      >
        <MovieCard movie={movie} />
      </Link>
    ))}
  </div>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Movies;
