import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Pagination = ({ setPage, page, totalPages, fetchData }) => {
  const goNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      fetchData();
    }
  };

  const goPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      fetchData();
    }
  };

  return (
    <div className="inset-0 flex items-center justify-between p-4">
      <button
        type="button"
        onClick={goPreviousPage}
        disabled={page === 1}
      >
        <RiArrowLeftSLine size={40} />
      </button>
      <button
        type="button"
        onClick={goNextPage}
        disabled={page === totalPages}
      >
        <RiArrowRightSLine size={40} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Pagination;
