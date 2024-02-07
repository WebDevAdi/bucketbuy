import React, { useEffect, useRef, useState } from "react";
import { useGetCurrentUserQuery, useGetUserCartQuery, useRemoveItemFromCartMutation, useUpdateQuantityMutation } from "../../features/api/apiSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { CartLoading, Currency } from "../../components";

function Cart() {

  let [total,setTotal] = useState()
  let [subtotal,setSubtotal] = useState(0)
  let [deliverCharges,setDeliveryCharges] = useState(0)
  let {data:user} = useGetCurrentUserQuery()
  let [updateQuantity, {data:updatedCart}] = useUpdateQuantityMutation()
  const {data:cart,isLoading:isCartLoading} = useGetUserCartQuery()
  const [removeItemFromCart,{isLoading:isRemoveItemLoading}] = useRemoveItemFromCartMutation()
  const navigate = useNavigate()

  // console.log(updatedCart);

  console.log(cart?.products);

  const quantity = useRef()
  // console.log(quantity);

  const incrementQuantity = (productId,quantity) =>{
    try {
      updateQuantity({productId,quantity:+quantity+1})
    } catch (error) {
      console.error(error)
    }
  }

  const decrementQuantity =(productId,quantity) =>{
    try {
      updateQuantity({productId,quantity:+quantity-1})
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if(cart){
      let subtotal = 0
      cart.products.map((product)=>{
        subtotal+=Number(product?.product?.price) * Number(product?.quantity)
      })
      let total = subtotal + deliverCharges
      setSubtotal(subtotal)
      setTotal(total)
    }
  },[cart]);
  return (
    isCartLoading? <CartLoading/>: <div className="my-10 flex flex-col md:flex-row mx-auto">
   <div className="flex flex-col">
   {cart && cart?.products?.map((product)=>(
      <div key={product._id} className="bg-white mb-5 border h-fit p-2 rounded-md flex flex-col justify-between ">
      {/* cart items */}
      <div className="text-lg font-bold text-right mr-5 hover:cursor-pointer"></div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="max-h-28 max-w-28">
          <NavLink to={`/products/${product?.product?._id}`}>
          <img
            src={product?.product?.productImages[0]}
            alt=""
            className="w-full h-full object-contain"
          />
          </NavLink>
        </div>
        <div className="px-4 flex flex-col justify-between p-2  w-full">
          <NavLink to={`/products/${product?.product?._id}`}>
          <div className="text-md sm:text-lg md:text-lg font-bold py-2 sm:py-0">
           {product?.product?.title}
          </div>
          </NavLink>
          <div className="font-semibold px-1.5 py-0.5 bg-blue-500 w-fit text-white rounded-md text-sm">
            {/* ratings */}
            <i className="fa-solid fa-star text-yellow-500"></i> 4.5
          </div>
          <div className="py-2 flex justify-between">
            {" "}
            <div>
              {/* price */}
              Price : <Currency className="" /> {product?.product?.price?.toLocaleString()}
              </div>
            <div className="flex items-center">
              <div className="mx-2 flex">
                {/* quantity */}
                Qty.
                <div className="border">
                  {" "}
                  <button className="w-6 h-6 font-bold" disabled={product?.quantity==1} onClick={()=>{decrementQuantity(product?.product?._id, product?.quantity)}}>-</button>
                  <input
                    type="number"
                    value={new Number(product
                      ?.quantity)}
                    ref={quantity}
                    readOnly
                    className="focus:outline-0 border-r border-l w-6 h-6 font-bold text-center remove-arrow"
                  />
                  <button className="w-6 h-6 font-bold" onClick={()=>{incrementQuantity(product?.product?._id, product?.quantity)}}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex white">
              <div>
                {/* subtotal */}
                <div className="whitespace-nowrap">Subtotal : <Currency /> {(+product?.product?.price*+product?.quantity)?.toLocaleString()}</div>
              </div>
            </div>

            <div className="sm:mx-3 my-2 flex whitespace-nowrap">
              {/* buy now btn */}
              <div>
                <button className="bg-orange-500 px-2 rounded-sm py-1 text-white font-bold">
                  Buy Now!
                </button>
              </div>
              <div>
                <button className="mx-2 bg-red-500 px-2 rounded-sm py-1 text-white font-bold" onClick={()=>{removeItemFromCart({productId:product?.product?._id})}}>
                   {isRemoveItemLoading?"Loading...":<div><i className="fa-solid fa-trash"></i> Remove Item</div>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}

   </div>
    <div className="bg-white sm:mx-5 p-2 h-fit mt-10 md:mt-0">
      {/* Total Price */}
      <div className="">
        <span className="font-bold">Address</span> :{" "}
        {`${user?.address?.apartment}, ${user?.address?.streetAddress}, ${user?.address?.city}, ${user?.address?.state}, ${user?.address?.pinCode} `}
      </div>
      <div className="py-3"><hr /></div>
      <div className="flex justify-between">
        <div>Subtotal</div>
        <div><Currency /> {subtotal?.toLocaleString()}</div>
      </div>
      <div className="flex justify-between">
        <div>Delivery Charges</div>
        <div><Currency/> {deliverCharges}</div>
      </div>
      <div className="py-3"><hr /></div>
      <div className="flex justify-between text-lg font-semibold">
        <div>Total</div>
        <div><Currency /> {total?.toLocaleString()}</div>
      </div>
      <div className="py-3"><hr /></div>
      <div>
        <button className="text-center w-full bg-orange-500 text-white font-semibold p-1 text-lg rounded-md" onClick={()=>{navigate('/cart/checkout')}}>
          Place Order
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Cart;
