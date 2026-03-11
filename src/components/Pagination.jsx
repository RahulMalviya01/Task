import React from 'react'


const Pagination = ({total,perPage,setPage,currentPage}) => {

    const pages = [];

    for(let i =1;i<=Math.ceil(total/perPage);i++){

        pages.push(i);
    }

  return (
    <div className='Pagination'>

      <button onClick={()=>setPage(currentPage - 1)} disabled={currentPage === 1}>prev</button>

      {pages.map(page=>(
        <button key= {page} onClick={()=>setPage(page)}>{page}</button>
      ))}

      <button onClick={()=>setPage(currentPage + 1)}
      disabled = {currentPage === pages.length}>Next</button>
    </div>
  )
}

export default Pagination
