import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  //   const [currPage, setCurrPage] = useState(1);
  const currPage = props.currPage;
  const getPage = props.getPage;

  const handleFirstBtn = () => {
    // setCurrPage(1);
    getPage(1);
  };

  const handlePrevBtn = () => {
    // setCurrPage(currPage - 1);
    getPage(currPage - 1);
  };

  const handleNextBtn = () => {
    // setCurrPage(currPage + 1);
    getPage(currPage + 1);
  };

  const handleLastBtn = () => {
    // setCurrPage(500);
    getPage(500);
  };

  return (
    <nav>
      <div className='pagination'>
        <div className='pagination-container'>
          <button
            className='page-btn btn-first'
            onClick={handleFirstBtn}
            disabled={currPage === 1}
          >
            FIRST
          </button>
          <button
            className='page-btn btn-prev'
            onClick={handlePrevBtn}
            disabled={currPage === 1}
          >
            PREV
          </button>
          <div className='current-page'>
            <div className='current-page-text'>CURRENT</div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='current-page-svg'
                width='30px'
                height='30px'
              >
                <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
              </svg>
            </div>
            <div className='current-page-text'>PAGE:</div>
            <div className='page-number'>{currPage}/500</div>
          </div>
          <button
            className='page-btn btn-next'
            onClick={handleNextBtn}
            disabled={currPage === 500}
          >
            NEXT
          </button>
          <button
            className='page-btn btn-last'
            onClick={handleLastBtn}
            disabled={currPage === 500}
          >
            LAST
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
