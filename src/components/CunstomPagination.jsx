import { Pagination } from '@mui/material';
import React from 'react'

const CunstomPagination = ({setPage, numOfPages=10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }

  return (
    <div className='w-full flex justify-center mt-10 mb-5'>
      <Pagination onChange={(e) => handlePageChange(e.target.textContent)} variant="outlined" count={numOfPages} hideNextButton hidePrevButton color='primary'/>
    </div>
  );
}

export default CunstomPagination