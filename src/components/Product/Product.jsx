import React from 'react'
import { Link } from 'react-router-dom'
import Currency from '../Currency/Currency'

function Product({title,ratings = 0, price, productImages=[],productId=''}) {
  return (
   <Link to={`/products/${productId}`}>
    <div className='flex flex-col max-w-80 my-1 p-2' >
        {/* Product Image */}
        <div className='h-60 flex justify-center'>
            <img src={productImages[0]} alt=""  className={`object-contain`}/>
        </div>

       <div>
         {/* product ratings */}
         <div className='text-sm bg-blue-500 rounded-md text-white px-1 font-bold w-fit my-1'>
        <i className="fa-solid fa-star text-sm text-yellow-300"></i>  {ratings}
        </div>

        {/* Product Title */}
        <div className='font-bold my-1 break-words'>
            {title}
        </div>

        {/* product price */}
        <div className=' my-1'>
           <Currency/> {Number(price).toLocaleString()}
        </div> </div> 
    </div>
   </Link>
  )
}

export default Product
