import React, { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  // demo cart items
  const products = [
    {
        productId:'j63h4s685hsdfhdf4326bsdh',
        quantity:'2'
    },
    {
        productId:'s6gd4sdfhsdhsdhsdfewyh',
        quantity:'1'
    },
    {
        productId:'a6dfhg76ad4thgabjjj38597s8er8hdfh',
        quantity:'2'
    },
    {
        productId:'35fdgh87sdhasdSAEQWEsgfdh',
        quantity:'5'
    },
  ];

  const allProducts = useSelector((state)=>state.product.products)

  const cartItems = allProducts.filter((product)=>{
    return products.find((item)=>{
        return product._id === item.productId
    })
  })
  console.log(cartItems);


  useState(() => {});
  return (
    <div className="my-10">
       <div>
        <div>My Cart</div>


        {/* cart items */}
        <div>
            
        </div>

       </div>
       <div>
        {/* price details */}
       </div>
    </div>
  )
}

export default Cart;
