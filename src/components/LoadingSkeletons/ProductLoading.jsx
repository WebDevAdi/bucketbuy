import React from 'react'

function ProductLoading() {
  return (
    <div className='flex flex-col md:flex-row' >
      <div className='h-40 loadingContent md:w-1/3 md:mr-5'></div>
      <div className='h-40 flex flex-col justify-between md:w-2/3 my-5 md:my-0'>
        <div className='h-10 loadingContent'></div>
        <div className='h-10 loadingContent'></div>
        <div className='h-10 loadingContent'></div>
      </div>
    </div>
  )
}

export default ProductLoading
