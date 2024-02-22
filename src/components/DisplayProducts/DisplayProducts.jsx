import React from 'react'
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';

function DisplayProducts({category,products=[],subcategory=''}) {

  const navigate = useNavigate()

  return (
    <div className="bg-white">
      <h1 className="text-3xl font-bold px-3 py-5">{category}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product._id}
                className="flex justify-center border-2 m-2 hover:shadow-lg shadow-slate-500"
              >
                <Product
                  title={product.title}
                  price={product.price}
                  productImages={product.productImages}
                  ratings={product.ratings}
                  aspectRatio={'video'}
                  productId={product._id}                />
              </div>
            );
          })}

        
      </div>
      <div className="flex justify-center py-5">
          <button className="bg-blue-500 p-2 rounded-md text-white font-bold px-5" onClick={()=>{navigate(`/categories/${category}/${subcategory}`)}}>
            View More...
          </button>
        </div>
    </div>
  )
}

export default DisplayProducts
