import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchField from '../components/SearchField';
import Movies from '../components/Movies';
import Pagination from '../components/Pagination';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // New state to store the total number of pages

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchInput}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`,
      );

      setMovies(response.data.Search || []);
      setTotalPages(Math.ceil(response.data.totalResults / 10)); // Calculate total pages

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchInput, page]); // Include "page" in the dependency array

  return (
    <div className="flex flex-col items-center">
      <SearchField setSearchInput={setSearchInput} setPage={setPage} />
      {movies.length === 0 ? (
        <div className="w-full text-center">
          <p className="text-gray-500">No results found</p>
        </div>
      ) : (
        <>
          <Movies movies={movies} />
          <Pagination setPage={setPage} page={page} totalPages={totalPages} fetchData={fetchData} />
        </>
      )}
    </div>
  );
};

export default MovieSearch;
