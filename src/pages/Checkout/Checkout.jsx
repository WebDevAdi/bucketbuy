import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery, useGetUserCartQuery } from "../../features/api/apiSlice";
import { BillingForm } from "../../components";

function Checkout() {
  const [cartItemsDisplay, setCartItemsDisplay] = useState(true);
  const navigate = useNavigate();
  const { data: cart } = useGetUserCartQuery();
  const { productId , qty} = useParams();
  const {data:product} = useGetProductByIdQuery(productId, {
    skip: !productId
  })

  console.log(qty);

  return (
    <div className="flex flex-col-reverse md:flex-row m-3">
      <div className="p-2 md:p-8 w-full bg-white">
       <BillingForm/>
      </div>

      {/* if order if made through /cart/checkout route */}

      {
        !productId && <div className="p-2 md:p-8 h-fit my-5 md:my-0 md:max-w-[400px] md:mx-2 bg-white">
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
                  <div className="whitespace-nowrap">
                    <i className="fa-solid fa-inr"></i>{" "}
                    {product.product.price * product.quantity}
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-between border-b p-2 font-bold">
            {/* subtotal */}
            <div>Subtotal</div>
            <div>
              <i className="fa-solid fa-inr"></i>
              {4648464}
            </div>
          </div>

          <div className="flex justify-between border-b p-2 font-bold">
            {/* total */}
            <div>Total</div>
            <div>
              <i className="fa-solid fa-inr"></i>
              {4648464}
            </div>
          </div>
        </div>
      </div>
      }


      {/* if order is place for a single product using product/:productId/checkout route */}

      {
        productId && <div className="md:mx-2 mb-8 md:mb-0 md:my-0 md:max-w-[400px] bg-white h-fit p-5">
          <div>
            <h3 className="text-2xl font-bold">Order Summary</h3>
          </div>

          <div>
            <div className="flex flex-col items-center ">
              {/* img and detail */}
              <div className="max-h-60 max-w-60 py-6">
                {/* img */}
                <img src={product?.productImages[0]} className="h-full w-full object-contain" alt="" />
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
                <div>{product?.price}</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Quantity</div>
                <div>{qty}</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Subtotal</div>
                <div>416</div>
              </div>

              <div className="flex justify-between border-t py-2">
                <div>Total</div>
                <div>2458</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Checkout;
