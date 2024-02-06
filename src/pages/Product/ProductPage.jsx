import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../components";
import {
  useAddToCartMutation,
  useGetCurrentUserQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetUserCartQuery,
  useRemoveItemFromCartMutation,
} from "../../features/api/apiSlice";


export default function ProductPage() {
  const { productId } = useParams();
  let [quantity, setQuantity] = useState(1);
  const [displayImage, setDisplayImage] = useState()
  const navigate = useNavigate();
  const { data: product, isSuccess:isProductFetchSuccess } = useGetProductByIdQuery(productId);
  const {data:userCart} = useGetUserCartQuery()
  const [addToCart,{data:cart,isLoading:addToCartLoading}] = useAddToCartMutation()

  const {data:user} = useGetCurrentUserQuery()
  const [removeItemFromCart,{isLoading:isRemoveCartLoading}] = useRemoveItemFromCartMutation()
  const { data: suggestedProducts } = useGetProductsQuery(
    {
      category: product?.category,
      subcategory: product?.subcategory,
    },
    {
      skip: product === undefined,
    }
  );

  const productAlreadyInCart = () =>{
    return userCart?.products?.some((product)=>product?.product?._id == productId)
  }

  function onQuantityChange(e) {
    if (quantity < 0) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  }

  function scrollToTop() {
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    scrollToTop()
    if(product){
      setDisplayImage(product.productImages[0])
    }
    // quantityLimiter()
    setQuantity(1);
  }, [productId,product]);

  return (
    <div className="container flex mx-auto flex-col py-10 bg-white px-4">
      <div className="flex flex-col md:justify-around md:flex-row ">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-5 h-60">
            <img src={displayImage} id="displayImage" className="h-full w-full object-contain" alt="" />
          </div>
          <div className="flex h-20">
            {product?.productImages &&
              product?.productImages?.map((image,index) => {
                return (
                  <div
                    className={`h-20 ${displayImage===image?'border-blue-500':''} border w-20 mx-2 cursor-pointer  p-2`}
                    key={index}
                    onClick={()=>{setDisplayImage(image)}}
                  >
                    <img src={image} className="h-full w-full object-contain" alt="" />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col md:ml-5 max-w-[800px]">
          {/* title */}
          <div className="mt-5 md:mt-0 text-xl sm:text-2xl font-bold">
            <h1>{product?.title}</h1>
          </div>
          {/* ratings */}
          <div className="my-3 font-semibold bg-blue-500 w-fit text-sm px-2 py-1 rounded-sm"><i className="fa-solid fa-star text-yellow-500"></i> <span className="text-sm text-white">0</span></div>
          {/* price */}
          <div className="text-xl mb-5  mt-2 font-semibold">Price : {product?.price}</div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div>
                {/* quantity */}
                <label htmlFor="quantity" className="font-bold text-lg">
                  Quantity :{" "}
                </label>
                <input
                  name="quantity"
                  min={1}
                  max={10}
                  readOnly={productAlreadyInCart()}
                  value={quantity}
                  onChange={onQuantityChange}
                  type="number"
                  className="text-center bg-white w-20 focus:outline-0 border mx-5"
                />
              </div>

              <div className="flex mt-5 sm:mt-0">
              <div className={`${productAlreadyInCart()? 'hidden':''}`}>
                {/* add to cart */}
                <button className="bg-blue-500 px-5  md:mx-3 whitespace-nowrap p-2  md:py-1 text-white font-semibold text-lg" onClick={()=>{user?addToCart({productId:product._id,quantity}):navigate('/login')}}>
                <i className="fa-solid fa-cart-shopping"></i> {addToCartLoading?'Loading...':'Add to Cart'}
                </button>
              </div>
              <div className={`${productAlreadyInCart()? '':'hidden'}`}>
                {/* Remove from cart btn */}
                <button className="bg-red-500 px-5  md:mx-3 whitespace-nowrap p-2  md:py-1 text-white font-semibold text-lg" onClick={()=>{removeItemFromCart({productId:product._id})}}>
                <i className="fa-solid fa-trash"></i> {isRemoveCartLoading?"Loading...":'Remove from Cart'}
                </button>
              </div>

              <div>
                {/* Buy Now  */}
                <button className="bg-orange-500 px-5 mx-3 md:mx-3 whitespace-nowrap p-2  md:py-1 text-white font-semibold text-lg" onClick={()=>navigate(`/products/${product._id}/${quantity}/checkout`)}>
                  Buy Now
                </button>
              </div>
              </div>
            </div>

              {/* Product Description */}
            <div className="mt-5">
              <div className="text-lg font-bold">Description</div>
              <div className="break-words">
                {product?.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* suggested products */}
      <div className="mt-10">
        <div>
          <h3 className="text-2xl font-bold "> Products You May Also Like</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {suggestedProducts && suggestedProducts.slice(0,8).map((product)=>{
            return <div key={product._id} className="hover:shadow-md">

             <Product
              productId={product._id}
              title={product.title}
              price={product.price}
              productImages={product.productImages}
              ratings={product.ratings}
              />

            </div>
          })}

        </div>
        <div className="flex justify-center">
            <button className="p-2 px-5 font-bold text-white text-lg bg-blue-500 rounded-sm" onClick={()=>{navigate(`/categories/${product.category}/${product.subcategory}`)}}>Browse More...</button>
          </div>
      </div>
    </div>
  );
}
