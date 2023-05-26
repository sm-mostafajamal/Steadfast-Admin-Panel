import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../../redux/jobReducer";
import "./style.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPageNumber, pageNumbers } = useSelector((state) => state.jobs);
  return (
    <div className="pagination">
      <button onClick={() => dispatch(setPageNumber(currentPageNumber - 1))}>
        Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={(e) => dispatch(setPageNumber(Number(e.target.innerText)))}
          className={pageNumber === currentPageNumber ? "active" : undefined}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={() => dispatch(setPageNumber(currentPageNumber + 1))}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
