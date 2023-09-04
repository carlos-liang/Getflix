import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ setSearchInput, setPage }) => {
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex w-1/2 mt-20 mb-10 mx-10">
      <input
        type="text"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search for movies"
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};

SearchField.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default SearchField;
