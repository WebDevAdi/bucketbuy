import React from 'react'

function Pagination({page, totalResults}) {
  const numberofPages = totalResults/4
  console.log(page, totalResults, numberofPages);
  return (
    <div className='bg-white border p-3 flex justify-center overflow-scroll'>
      {
        Array.from({length:25}).map((_,index)=>(
          
      <div className='border h-5 w-5 flex justify-center items-center p-3'>{index+1}</div>
        ))
      }
    </div>
  )
}

export default Pagination
