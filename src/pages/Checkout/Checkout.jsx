import React, { useEffect, useState } from "react";
import {
  useGetCurrentUserQuery,
  useGetProductByIdQuery,
  useGetUserCartQuery,
  useOrderProductMutation,
} from "../../features/api/apiSlice";
import { BillingForm, Currency } from "../../components";
import { useNavigate, useParams, NavLink } from "react-router-dom";

function Checkout() {
  const [shippingAddress,setShippingAddress] = useState()
  let [total, setTotal] = useState(0)
  let [subtotal, setSubTotal] = useState(0)
  let [deliveryCharges, setDeliveryCharges] = useState(49)
  const [cartItemsDisplay, setCartItemsDisplay] = useState(true);
  const navigate = useNavigate();
  const {data:user} = useGetCurrentUserQuery()
  const { data: cart } = useGetUserCartQuery();
  const { productId, qty } = useParams();
  const { data: product } = useGetProductByIdQuery(productId, {
    skip: !productId,
  });
  const [orderProduct] = useOrderProductMutation()


  const onOrderSubmit = async (e) => {
    e.preventDefault()
    let productsToOrder;
    if(product && productId) {
      productsToOrder = [
        {
          product:product?._id,
          quantity:qty,
          orderPrice:Number(product?.price),
          subtotal:Number(qty) * Number(product?.price)
        }
      ]
    }

  
    if(cart && !productId){
      productsToOrder = cart?.products?.map((product)=>{
        return {
          product:product?.product?._id,
          quantity:product?.quantity,
          orderPrice:Number(product?.product?.price),
          subtotal:Number(product?.quantity) * Number(product?.product?.price),
        }
        
      })
    }
    const data = {
      shippingAddress:shippingAddress?.address,
      products:productsToOrder,
      paymentMethod:'Cash on Delivery',
      subtotal,
      deliveryCharges,
      totalAmount:total,
    }
    // console.log(data);
    await orderProduct(data)
    window.location.href = '/user/orders'
  };


  const setProductsToOrder = () =>{
    if(cart && !productId){
      let subT = 0
      cart?.products?.map((product)=>{
        subT += Number(product?.product?.price)*Number(product?.quantity)
      })
      let total = deliveryCharges + subtotal
      setSubTotal(subT)
      setTotal(subT+deliveryCharges)
      
    }
  
  
    if(product && productId) {
      
      setSubTotal(Number(product?.price) * Number(qty));
      setTotal(Number(product?.price) * Number(qty) + deliveryCharges)
    }
  }

useEffect(()=>{
  setProductsToOrder()

},[cart,product, productId])
  return (
    <div className="flex flex-col-reverse md:flex-row m-3">
      <div className="p-2 md:p-8 w-full bg-white">
          <BillingForm {...{shippingAddress, setShippingAddress, onOrderSubmit}} />
      </div>

      {/* if order if made through /cart/checkout route */}

      {!productId && (
        <div className="p-2 md:p-8 h-fit my-5 md:my-0 md:max-w-[400px] md:mx-2 bg-white">
          {/* product details */}
          <div className="">
            <div
              className=""
              onClick={() => {
                setCartItemsDisplay((prev) => !prev);
              }}
            >
              <h4 className="text-xl md:text-2xl font-semibold ">
                Order Summary
                <span className="md:hidden">
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </h4>
            </div>
            <div className={`${cartItemsDisplay ? "hidden" : ""} md:block`}>
              {/* looping cart items from user's cart */}
              {cart?.products &&
                cart?.products?.map((product) => (
                  <div
                    key={product.product._id}
                    className="flex items-center border-b py-2"
                  >
                    <div className="max-h-[50px] max-w-[50px]">
                      <img
                        src={product.product.productImages[0]}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="text-sm mx-2 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      <NavLink to={`/products/${product.product._id}`}>
                        {product.product.title}
                      </NavLink>
                    </div>

                    <div className="whitespace-nowrap mx-3">
                      {" "}
                      x {product.quantity}
                    </div>
                    <div className="whitespace-nowrap font-bold">
                      <Currency className=""/>{" "}
                      {(product.product.price * product.quantity)?.toLocaleString()}
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-between border-b p-2 font-bold">
              {/* subtotal */}
              <div>Subtotal</div>
              <div>
                <Currency />
                {subtotal?.toLocaleString()}
              </div>
            </div>

            <div className="flex justify-between border-b p-2 font-bold">
              {/* total */}
              <div>Total</div>
              <div>
                <Currency />
                {total?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* if order is place for a single product using product/:productId/checkout route */}

      {productId && (
        <div className="md:mx-2 mb-8 md:mb-0 md:my-0 md:max-w-[400px] bg-white h-fit p-5">
          <div>
            <h3 className="text-2xl font-bold">Order Summary</h3>
          </div>

          <div>
            <div className="flex flex-col items-center ">
              {/* img and detail */}
              <div className="h-60 w-60 py-6">
                {/* img */}
                <img
                  src={product?.productImages[0]}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div>
                {/* product detail */}
                <div>
                  {/* title */}
                  <div className="font-semibold">{product?.title}</div>
                </div>
              </div>
            </div>

            <div className=" font-semibold mt-5">
              <div className="flex justify-between border-t py-2">
                <div>Price</div>
                <div><Currency/> {product?.price}</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Quantity</div>
                <div>{qty}</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Subtotal</div>
                <div><Currency /> {subtotal?.toLocaleString()}</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Total</div>
                <div><Currency /> {total.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
