import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useLocation().state;
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`,
      );
      setMovie(response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (movie) setLoading(false);
    else {
      fetchMovieDetails();
    }
  }, [movie]);

  return (
    loading ? (<div>Loading ...</div>) : (
      <div className="mx-2 md:mx-20 mt-20 w-full">
        <Link to="/" className="text-blue-500 hover:underline mb-2">
          Back to Movies
        </Link>
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="w-1/3 flex items-center justify-center">
            <img
              key={movie.imdbID}
              className=""
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <div className="w-1/2 mx-5">
            <div className="text-2xl font-semibold mb-10">{movie.Title}</div>
            <div className="flex flex-col w-full text-sm text-left text-gray-500">
              <div className="flex gap-2 bg-white border-b">
                <div className="px-6 py-4 font-medium text-gray-900">
                  Actors
                </div>
                <div className="px-6 py-4 font-medium text-gray-900">
                  {movie.Actors}
                </div>
              </div>
              <div className="flex gap-2 bg-white border-b">
                <div className="px-6 py-4 font-medium text-gray-900">
                  Plot
                </div>
                <div className="px-6 py-4 font-medium text-gray-900">
                  {movie.Plot}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetail;
